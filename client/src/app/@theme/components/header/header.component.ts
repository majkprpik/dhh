import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { LayoutService } from '../../../@core/data/layout.service';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input()
  position = 'normal';
  userMenuClicks = {
    Profile: function () { },
    'Log out': function () {
      this.authService.logout('local');
      location.reload();
    },
  };
  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private analyticsService: AnalyticsService,
    private layoutService: LayoutService,
    private authService: NbAuthService,
  ) {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload();
      }
    });

    this.userMenuClicks = {
      Profile: function () {

      },
      'Log out': function () {
        authService
          .logout('email')
          .subscribe(
            x => x,
            err => console.error('Observer got an error: ' + err),
            () => location.reload(),
          );
      },
    };
  }
  user: any;

  userMenu = [
    { title: 'Profile', click: 'profile' },
    { title: 'Log out', click: 'logout' },
  ];

  ngOnInit() {
    this.menuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => this.userMenuClicks[title]());
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
