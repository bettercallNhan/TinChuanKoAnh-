import { GuardGuard } from './guards/guard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
[
  {path : '',redirectTo: '',pathMatch:'full'},
  {path: 'home',canActivate:[GuardGuard],loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
