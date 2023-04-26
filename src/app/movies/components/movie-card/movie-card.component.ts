import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  favoriteMovies: number[] = [];

  constructor(private router: Router) {}

  toggleFavoriteMovie(movieId: number): void {
    if (this.favoriteMovies.includes(movieId)) {
      this.favoriteMovies = this.favoriteMovies.filter((id) => id != movieId);
    } else {
      this.favoriteMovies.push(movieId);
    }
  }

  navigateTo(movie_id: string): void {
    this.router.navigate(['/movies', movie_id]);
  }

  ngOnInit(): void {}
}
