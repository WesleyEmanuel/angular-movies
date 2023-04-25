import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: string[] = [
    'Matrix',
    'Lord of Rings',
    'Need for Speed',
    'The Goodfather',
    'Back to the future',
  ];

  constructor() {}

  ngOnInit(): void {}
}
