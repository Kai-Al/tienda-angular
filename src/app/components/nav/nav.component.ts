import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  token: string = '';
  counter: number = 0;
  profile: User | null = null;

  constructor(
    private storeService: StoreService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
  }

  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  login() {
    this.authService.login('john@gmail.com', '123456').subscribe((res) => {
      this.token = res.access_token;
      console.log(res.access_token);
      this.getProfile();
    });
  }

  getProfile() {
    this.authService.getProfile(this.token).subscribe((res) => {
      console.log(res);
      this.profile = res;
    });
  }
}
