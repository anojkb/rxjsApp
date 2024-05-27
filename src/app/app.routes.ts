import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    {path:'',component: BlogComponent
    // ,loadChildren: () => import('./blog/blog.routes').then((m) => m.blogRoutes),
    }
];
