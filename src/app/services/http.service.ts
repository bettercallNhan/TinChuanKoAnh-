import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs';
import { News } from '../news.model';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient:HttpClient) { }
  get(){
    let url ='https://social.runwayclub.dev/api/articles/latest';
    return this.httpClient.get(url).pipe(map((data : any ) => {
      console.log(data);
      return <News[]> data ;
    }))
  }
}
