import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchResult} from '../models/search-result';
import {MovieListService} from '../services/movie-list.service';
import {Subscription} from 'rxjs';
import {MovieDetailService} from '../services/movie-detail.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {

  public movies: SearchResult[] = [];

  private list_subscription: Subscription;

  constructor(private list: MovieListService,
              private mdetail: MovieDetailService) {}


  ngOnInit() {
    this.list_subscription = this.list.movies.subscribe(sr => {
      this.movies = sr;
    });
  }

  ngOnDestroy() {
    this.list_subscription.unsubscribe();
  }

  showExtraInfo(movie: SearchResult) {
    this.mdetail.showMovieEtraInfo(movie.imdbID);
  }

  removeItemFromTheList(movie: SearchResult){
    this.list.removeMovie(movie);
  }
}
