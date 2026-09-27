import { Routes } from '@angular/router';
import { Home } from './home/home';
import { User } from './user/user';
import { Login } from './login/login';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'user', component: User },
    {path:'',component:Login}
];
