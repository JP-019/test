import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  darkMode: boolean = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

}
