import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie: any = {};

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.getMovieById();
  }

  getMovieById(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    this.moviesService.getMovieById(paramId || '1').subscribe(
      (movie) =>
        (this.movie = {
          ...movie,
          poster_path: environment.api_img + movie.poster_path,
          backdrop_path: environment.api_img + movie.backdrop_path,
          vote_average: movie.vote_average.toFixed(1),
        }),
      (error) => console.log(error)
    );
  }
}
