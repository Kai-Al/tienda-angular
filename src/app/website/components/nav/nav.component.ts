import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  counter: number = 0;
  profile: User | null = null;
  categories: Category[] = [];

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    public categoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
    this.getAllCategories();
    this.authService.user$.subscribe((user) => {
      this.profile = user;
    });
  }

  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  login() {
    this.authService.login('admin@mail.com', 'admin123').subscribe((res) => {
      this.getProfile();
      this.router.navigate(['/profile']);
    });
  }

  getProfile() {
    this.authService.getProfile().subscribe((res) => {
      this.profile = res;
    });
  }

  getAllCategories() {
    this.categoriesService.getAll().subscribe((res) => {
      this.categories = res;
    });
  }

  logout() {
    this.authService.logout();
    this.profile = null;
    this.router.navigate(['/home']);
  }
}
