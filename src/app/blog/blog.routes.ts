import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DocsComponent } from './docs/docs.component';

export const blogRoutes: Routes = [
    {path:'home',component: HomeComponent},
    {path:'about',component: AboutComponent},
    {path:'docs',component: DocsComponent},
    

];
