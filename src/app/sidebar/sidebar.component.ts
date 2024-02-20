import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { SearchInputComponent } from '../search-input/search-input.component';

interface sidebar_categories_props {
  id: number;
  icon?: string;
  name: string;
  link: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SearchInputComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  currentCategory = '';
  currentSearch = '';

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.sharedService.currentSearch$.subscribe((search) => {
      this.currentSearch = search;
    });

    if (this.currentSearch === '') {
      this.sharedService.currentCategory$.subscribe((category) => {
        this.currentCategory = category;
      });
    }
  }

  onSelectCategory(route: string): void {
    this.router.navigate([route]);
  }

  sidebar_categories: sidebar_categories_props[] = [
    {
      id: 1,
      icon: '/assets/svg/Color.svg',
      name: 'Colores',
      link: '/category/colores',
    },
    {
      id: 2,
      icon: '/assets/svg/Component.svg',
      name: 'Componentes',
      link: '/category/componentes',
    },
    {
      id: 3,
      icon: '/assets/svg/Deploy.svg',
      name: 'Deploy',
      link: '/category/deploy',
    },
    {
      id: 4,
      icon: '/assets/svg/Forms.svg',
      name: 'Formularios',
      link: '/category/formularios',
    },
    {
      id: 5,
      icon: '/assets/svg/Font.svg',
      name: 'Fuentes',
      link: '/category/fuentes',
    },
    {
      id: 6,
      icon: '/assets/svg/Icon.svg',
      name: 'Iconos',
      link: '/category/iconos',
    },
    {
      id: 7,
      icon: '/assets/svg/Template.svg',
      name: 'Plantillas',
      link: '/category/plantillas',
    },
    {
      id: 8,
      icon: '/assets/svg/Youtube.svg',
      name: 'Streamers',
      link: '/category/streamers',
    },
  ];
}
