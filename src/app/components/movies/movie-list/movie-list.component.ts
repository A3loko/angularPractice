import { Component, OnInit, Input } from '@angular/core';
import { TMDB } from '../../../configs/tmdb.config';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }
  
  @Input() 
  movieDisplay = [];
  
  ngOnInit() {
  }

}
