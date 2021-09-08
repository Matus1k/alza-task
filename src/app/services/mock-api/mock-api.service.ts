import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HeroesListMock } from './heroes-list.mock';

@Injectable({
  providedIn: 'root',
})
export class MockApiService implements InMemoryDbService {
  createDb() {
    return { heroes: HeroesListMock };
  }
}
