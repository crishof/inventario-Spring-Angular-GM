import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, ProductListComponent,RouterLink],
})
export class AppComponent {
  title = 'inventario-app';

  menuOption: string = '';

  onOption(menuOption: string) {
    this.menuOption = menuOption;
  }
}
