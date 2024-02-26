import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  dropdownItems = ['New first', 'Last first', 'A-Z', 'Z-A'];
  currentOrder = 'New first';
  isDropdownOpen = false;

  constructor(private sharedService: SharedService) {}

  handleDropdown(newOrder: string): void {
    this.isDropdownOpen = false;
    this.currentOrder = newOrder;
    this.sharedService.setCurrentOrder(newOrder);
  }
}
