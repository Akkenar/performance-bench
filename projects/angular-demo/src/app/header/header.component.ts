import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from '../core/app.state';
import { LogoutAction } from '../core/user/user.actions';
import { selectUserEmail } from '../core/user/user.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username$: Observable<string>;
  isAuthenticated$: Observable<boolean>;

  constructor(private store$: Store<AppState>) {}

  ngOnInit() {
    this.username$ = this.store$.pipe(select(selectUserEmail));
    this.isAuthenticated$ = this.username$.pipe(map(username => !!username));
  }

  handleLogout() {
    this.store$.dispatch(new LogoutAction());
  }
}
