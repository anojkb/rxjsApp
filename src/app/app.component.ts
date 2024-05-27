import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from "./Includes/header/header.component";
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule,RouterOutlet,BlogComponent]
})
export class AppComponent {
  title = 'rxjsSeries';
}


