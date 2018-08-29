import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OMDbService} from '../services/omdb.service';
import {SearchResult} from '../models/search-result';
import {MatAutocompleteSelectedEvent} from '@angular/material';
import {MovieDetailService} from '../services/movie-detail.service';
import {MovieListService} from '../services/movie-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public options: SearchResult[] = [];

  public selected: SearchResult = null;

  constructor(private omdb: OMDbService,
              private mdetail: MovieDetailService,
              private list: MovieListService) { }

  ngOnInit() {
  }

  public onTextInput(event): void {
    const text = (<HTMLInputElement>event.target).value;
    this.updateOptions(text);
  }

  private updateOptions(text: string): void {
    this.omdb
      .getSearch(text)
      .subscribe((data: any) => {
        if (data.Response === 'True'){
          this.options = data.Search;
          console.log(this.options);
        } else {
          this.options = [];
        }
      });
  }

  public searchRes(search?: SearchResult): string | undefined{
    return search ? search.Title : undefined;
  }

  onAutocomplete(event: MatAutocompleteSelectedEvent){
    this.selected = event.option.value;
  }

  public addSelectedToList() {
    this.list.addMovie(this.selected);
  }

  public showExtraSelectedInfo(){
    this.mdetail.showMovieEtraInfo(this.selected.imdbID);
  }

}
