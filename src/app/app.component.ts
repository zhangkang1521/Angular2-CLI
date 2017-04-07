import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  selectedCities: string[] = [];

  selectedCategories: string[] = ['Technology', 'Sports'];

  checked: boolean = false;
}
