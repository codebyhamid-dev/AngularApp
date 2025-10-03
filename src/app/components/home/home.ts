import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  private route = inject(Router);

  goToAbout() {
    this.route.navigate(['/about']);
  }
}
