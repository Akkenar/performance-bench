import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username = 'User';
  isAuthenticated: true;

  constructor(private router: Router) {}

  ngOnInit() {}

  handleLogout() {
    this.router.navigateByUrl('login');
  }
}
