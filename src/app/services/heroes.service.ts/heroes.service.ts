import { Injectable } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, withLatestFrom } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private readonly heroesUrl = 'api/heroes/';
  private readonly topHeroesUrl = 'api/top-heroes/';

  heroList$ = new BehaviorSubject<Hero[]>([]);
  loading$ = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.heroList$.asObservable();
  }

  getLoading(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  getHeroesReguest(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((x) => this.heroList$.next(x)),
      tap(() => this.loading$.next(false))
    );
  }

  createHero(hero: Partial<Hero>): Observable<Hero> {
    //@ts-expect-error
    hero.id = null;
    return this.http.post<Hero>(this.heroesUrl, hero).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  editHero(hero: Hero): Observable<unknown> {
    console.log('edit');
    return this.http.put(this.heroesUrl + hero.id, hero).pipe(
      withLatestFrom(this.heroList$),
      tap(([_, heroList]) =>
        this.heroList$.next(editHeroInList(heroList, hero))
      )
    );
  }

  deleteHero(id: number): Observable<unknown> {
    console.log('delete');
    return this.http.delete(this.heroesUrl + id).pipe(
      withLatestFrom(this.heroList$),
      tap(([_, heroList]) =>
        this.heroList$.next(heroList.filter((hero) => hero.id !== id))
      )
    );
  }
}

function editHeroInList(heroes: Hero[], newHero: Hero): Hero[] {
  const heroId = heroes.findIndex((hero) => hero.id === newHero.id);

  return heroes.map((hero) => (hero.id === newHero.id ? newHero : hero));
}
