import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Brew} from './brew.model';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {
  url = 'https://api.openbrewerydb.org/';
  constructor(private httpClient: HttpClient) { }

  public getBeer(): Observable<Brew[]> {
    return this.httpClient.get<Brew[]>((this.url + 'breweries')).pipe(
      catchError(err => {
        console.log('logging:', err.message);
        return of(err);
      }),
      tap(x => { console.log(x); })
    );
  }

}
