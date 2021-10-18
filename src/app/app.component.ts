import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Prato do dia', url: '/prato/dia', icon: 'calendar' },
    { title: 'Lanches', url: '/prato/Lanches', icon: 'fast-food' },
    { title: 'Entrada', url: '/prato/Entrada', icon: 'file-tray-stacked' },
    { title: 'Refeição', url: '/prato/Refeição', icon: 'pizza' },
    { title: 'Sobremesas', url: '/prato/Sobremesas', icon: 'beaker' },
    { title: 'Bebidas', url: '/prato/Bebidas', icon: 'beer' }
  ];
  constructor() {}
}
