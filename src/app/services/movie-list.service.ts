import { Injectable } from '@angular/core';
import {SearchResult} from '../models/search-result';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  public movies = new BehaviorSubject<SearchResult[]>([]);

  constructor() {
    this.loadFromLocalStorage();
  }

  public addMovie(movie: SearchResult) {
    const result = this.movies.value;
    const index = result.findIndex(m => m.imdbID === movie.imdbID);
    if (index === -1) {
      result.push(movie);
    } else {
      result[index] = movie;
    }
    this.movies.next(result);
    this.updateLocalStorage();
  }

  public removeMovie(movie: SearchResult) {
    this.movies
      .next(this.movies
        .value.filter(m => m.imdbID !== movie.imdbID));
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem('movies', JSON.stringify(this.movies.value));
  }

  private loadFromLocalStorage() {
    const result = JSON.parse(localStorage.getItem('movies'));
    if (result) {
      this.movies.next(result);
    }
  }
}
