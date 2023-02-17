import { Component,OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { HttpService } from 'src/app/services/http.service';
import { News } from 'src/app/news.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
    new$ = new Observable<News[]>();
    constructor(private HttpService:HttpService){}
    ngOnInit(): void {
    this.new$ = this.HttpService.get();
}
}
