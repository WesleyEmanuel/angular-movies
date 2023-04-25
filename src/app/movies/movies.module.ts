import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './pages/movies/movies.component';
import { MaterialModule } from '../material/material.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
  declarations: [MoviesComponent, MovieDetailsComponent, MovieCardComponent],
  imports: [CommonModule, MaterialModule, MoviesRoutingModule],
})
export class MoviesModule {}
