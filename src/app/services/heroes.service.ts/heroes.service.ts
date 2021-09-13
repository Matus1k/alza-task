import { Injectable } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, withLatestFrom } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private readonly heroesUrl = 'api/heroes/';

  private readonly heroList$ = new BehaviorSubject<Hero[]>([]);
  private readonly loading$ = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.heroList$.asObservable();
  }

  getLoading(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  getHeroesRequest(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((heroes) => this.heroList$.next(heroes)),
      tap(() => this.loading$.next(false))
    );
  }

  createHero(hero: Partial<Hero>): Observable<Hero> {
    hero.id = this.heroList$.getValue().length + 1;
    this.heroList$.next(this.heroList$.getValue().concat(hero as Hero));
    return this.http.post<Hero>(this.heroesUrl, hero);
  }

  editHero(hero: Hero): Observable<unknown> {
    return this.http.put(this.heroesUrl + hero.id, hero).pipe(
      withLatestFrom(this.heroList$),
      tap(([_, heroList]) =>
        this.heroList$.next(editHeroInList(heroList, hero))
      )
    );
  }

  deleteHero(id: number): Observable<unknown> {
    return this.http.delete(this.heroesUrl + id).pipe(
      withLatestFrom(this.heroList$),
      tap(([_, heroList]) =>
        this.heroList$.next(heroList.filter((hero) => hero.id !== id))
      )
    );
  }
}

function editHeroInList(heroes: Hero[], newHero: Hero): Hero[] {
  return heroes.map((hero) => (hero.id === newHero.id ? newHero : hero));
}
