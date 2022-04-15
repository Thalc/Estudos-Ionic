import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuCollection = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Ion-Button', url: '/button', icon: 'dice' },
    { title: 'Card', url: '/card', icon: 'card' },
    { title: 'Alert', url: '/alert', icon: 'alert' },
    { title: 'Accordion', url: '/accordion', icon: 'dice' },
    { title: 'Action Sheet', url: '/actionsheet', icon: 'trash' },
    { title: 'Tags', url: '/tags', icon: 'dice' },
    { title: 'JS', url: '/js', icon: 'dice' },
  ];
  constructor() {}
}
