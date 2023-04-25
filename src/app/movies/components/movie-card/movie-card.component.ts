import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  favoriteMovies: number[] = [];

  constructor() {}

  toggleFavoriteMovie(movieId: number): void {
    if (this.favoriteMovies.includes(movieId)) {
      this.favoriteMovies = this.favoriteMovies.filter((id) => id != movieId);
    } else {
      this.favoriteMovies.push(movieId);
    }
  }

  ngOnInit(): void {}
}
