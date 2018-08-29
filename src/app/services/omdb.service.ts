import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OMDbService {

  private url = 'http://www.omdbapi.com';
  private apikey = 'fcb56b1a';

  constructor(private http: HttpClient) { }

  public getSearch(text: string){
    return this
      .http
      .get(this.url, {
        params: {
          apikey: this.apikey,
          s: text
        }
      });
  }

  public getMovieDetails(id: string){
    return this
      .http
      .get(this.url,{
        params: {
          apikey: this.apikey,
          i: id
        }
      });
  }
}

