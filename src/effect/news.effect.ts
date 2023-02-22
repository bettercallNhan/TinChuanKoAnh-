import * as NewsAction from './../action/news.action';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, lastValueFrom, map, switchMap, of } from 'rxjs';
import { News } from 'src/app/news.model';
@Injectable()
export class NewsEffect {
  constructor(private actions$: Actions, private httpClient: HttpClient) {}
  getNews = createEffect(() =>
    this.actions$.pipe(
      ofType(NewsAction.getPaginate),
      switchMap((action) =>
        this.httpClient.get(
          `https://social.runwayclub.dev/api/articles/latest?page=${action.page}&per_page=${action.per_page}`
        )
      ),
      map((respone: any) => {
        return NewsAction.getNewsSuccess({ news: <Array<News>>respone });
      }),
      catchError((error: string) => {
        return of(NewsAction.getNewsFail({ error: error }));
      })
    )
  );
}
