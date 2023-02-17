import { User } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'news';
  user!: User | null;
  user$ = new Observable<User | null > ;
  constructor(private authService:AuthService){}
  ngOnInit(): void {
    this.user$= this.authService.user$;
    this.user$.subscribe(user => {
      this.user = user;
      console.log(user);
    })
  }

  loginW(){
    this.authService.login();
  }
  logoutW(){
    this.authService.logout();
  }

}
