import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: any;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getMovies().subscribe(
      (movies) => {
        this.movies = movies.results.map((movie: any) => {
          return {
            ...movie,
            poster_path: environment.api_img + movie.poster_path,
          };
        });
        console.log(this.movies);
      },
      (error) => console.log(error)
    );
  }
}
