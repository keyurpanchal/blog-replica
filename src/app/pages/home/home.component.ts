import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CardsComponent } from '../../cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent,CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
