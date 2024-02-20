import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent,SidebarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(private router: Router) {}

  handleNavigation(): void {
    this.router.navigate(['/']);
  }
}
