import { Component,OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { HttpService } from 'src/app/services/http.service';
import { News } from 'src/app/news.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NewsState } from 'src/state/news.state';
import { NewsEffect } from 'src/effect/news.effect';
import * as NewsAction from 'src/action/news.action'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    new$ = new Observable<NewsState>();
    page = 1;
    constructor(private HttpService:HttpService,private store:Store<{news:NewsState}>){
      this.new$ = this.store.select('news');
    }
    getNews(){
      this.store.dispatch(NewsAction.getPaginate({page:1,per_page:10}));
    }
    PreviousNews(){
      this.page--;
      this.store.dispatch(NewsAction.getPaginate({page:this.page,per_page:10}));
    }
    NextNews(){
      this.page++;
      this.store.dispatch(NewsAction.getPaginate({page:this.page,per_page:10}));
    }

  ngOnInit(): void {
    this.getNews();

    }
  }
    // ngOnInit(): void {
    // this.new$ = this.HttpService.get();


