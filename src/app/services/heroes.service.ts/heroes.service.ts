import { Injectable } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private readonly heroesUrl = 'api/heroes/';
  private readonly topHeroes = 'api/top-heroes/';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getTopHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.topHeroes).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(this.heroesUrl + id).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createHero(hero: Partial<Hero>): Observable<Hero> {
    //@ts-expect-error
    hero.id = null;
    return this.http.post<Hero>(this.heroesUrl, hero).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  editHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl + hero.id, hero);
  }

  deleteHero(id: number): Observable<any> {
    return this.http.delete(this.heroesUrl + id);
  }
}
