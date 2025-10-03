import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
 
  private router=inject(Router);
  goHome() {
    this.router.navigate(['/']);
  }
}
