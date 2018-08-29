import {Injectable} from '@angular/core';
import {OMDbService} from './omdb.service';
import {MatDialog} from '@angular/material';
import {ExtraInfoComponent} from '../extra-info/extra-info.component';
import {MovieDetails} from '../models/movie-details';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {

  constructor(private omdb: OMDbService, private dialog: MatDialog) {
  }

  public showMovieEtraInfo(id: string): void {
    this.omdb.getMovieDetails(id).subscribe((movie_details: MovieDetails) => {
      // console.log(movie_details);
      this.dialog.open(ExtraInfoComponent, {
        width: "600px",
        height: "600px",
        data: movie_details
      });
    });
  }
}
