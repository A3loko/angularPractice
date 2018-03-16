import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  providers: [MovieService]
})
export class MovieSearchComponent implements OnInit {

  constructor(private movieservice : MovieService) { }
  
  @Output() movieSend=new EventEmitter<any>();

  searchInput : string = "";
  movieList = [];
  ngOnInit() {
  }

  searchMovie(){
    this.movieservice.getMovies(this.searchInput).subscribe((res)=>{
      this.movieList=res.results;
      this.movieSend.emit({
        "movieList" : this.movieList
      })
    },(err)=>{
      console.log("Error : ¯\_(ツ)_/¯");
    });
}

}
