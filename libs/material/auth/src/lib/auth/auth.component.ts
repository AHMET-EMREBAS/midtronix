import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LoginComponent } from '../login/login.component';
import { LoginWithSsoComponent } from '../login-with-sso/login-with-sso.component';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@Component({
  selector: 'mdtx-auth',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    LoginComponent,
    LoginWithSsoComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements AfterViewInit {
  @ViewChild('authTabs') tabGroup!: MatTabGroup;
  @ViewChild('loginTab') loginTab!: MatTab;
  @ViewChild('ssoTab') ssoTab!: MatTab;
  @ViewChild('forgotTab') forgotTab!: MatTab;
  @ViewChild('resetTab') resetTab!: MatTab;

  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly router: Router
  ) {}

  ngAfterViewInit(): void {
    const tab = this.route.snapshot.paramMap.get('tab');
    switch (tab) {
      case 'login':
        this.tabGroup.selectedIndex = 0;
        break;
      case 'sso':
        this.tabGroup.selectedIndex = 1;
        break;
      case 'forgot':
        this.tabGroup.selectedIndex = 2;
        break;
      case 'reset':
        this.tabGroup.selectedIndex = 3;
        break;

      default:
        this.tabGroup.selectedIndex = 0;
        break;
    }
  }
}
