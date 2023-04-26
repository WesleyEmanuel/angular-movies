import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl(endpoint: string): string {
    return environment.baseUrl + endpoint + environment.api_key;
  }

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl('movie/top_rated'));
  }

  searchMovies(name: string): Observable<any> {
    return this.http.get<any>(this.apiUrl('search/movie') + `&query=${name}`);
  }

  getMovieById(movie_id: string): Observable<any> {
    return this.http.get<any>(this.apiUrl(`movie/${movie_id}`));
  }
}
