import { Component } from '@angular/core';

import { ClientePage } from '../cliente/cliente';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;

  tab3Root = ClientePage;

  constructor() {

  }
}
