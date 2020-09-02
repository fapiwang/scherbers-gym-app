import { Component, ChangeDetectorRef, OnInit, OnDestroy, ApplicationRef, Testability } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'scherbers-gym-app';
  user: CognitoUserInterface | undefined;
  authState: AuthState;

  isMenuOpen = false;

  toggleMenu() {
    if (this.authState !== 'signedin') {
      this.isMenuOpen = false;
    }
    if (this.authState === 'signedin') {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

}
