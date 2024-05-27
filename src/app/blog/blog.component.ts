import { Component } from '@angular/core';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { RouterModule } from '@angular/router';
import { blogRoutes } from './blog.routes';
// import { ModuleWithProviders } from '@angular/core';
// import { Routes, RouterModule as RouterModuleForChild } from '@angular/router';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogHeaderComponent, RouterModule.forChild(blogRoutes)],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}


