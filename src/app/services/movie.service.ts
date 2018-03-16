import { Injectable } from '@angular/core';
import { TMDB } from '../configs/tmdb.config';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map' 

@Injectable()
export class MovieService {

  constructor(private http:Http) { }

  getMovies(searchInput:string){
    return this.http.get(TMDB.search_api+searchInput).map(data => data.json(),(error:any) => {this.handleError();});
  }

  handleError(){
    console.log("Error : ¯\_(ツ)_/¯");
  }

}
