import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { MaterialModule } from '../material/material.module';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, MaterialModule, MoviesRoutingModule],
})
export class MoviesModule {}
