import { Routes, RouterModule } from '@angular/router';

import  { HeaderComponent} from './header/header.component';
import {AuthGuard} from '../service/guards/auth.guards';
import {profileComponent} from "./profile/profile.component";
import {CloudinaryComponent} from "./CloudinaryImageComponent/CloudinaryComponent";

const appRoutes: Routes = [
  {path: 'profile', component: profileComponent},
  { path: '**', redirectTo: '/' }
];

export const appRouting: any[]=[];

export const routing = RouterModule.forRoot(appRoutes) ;
