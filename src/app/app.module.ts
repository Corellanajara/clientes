import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ClientePage } from '../pages/cliente/cliente';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClientesProvider } from '../providers/clientes/clientes';
import { IonicStorageModule } from '@ionic/storage';
//import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ClientePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot({
      name: '__cotech',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ClientePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
//    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClientesProvider,
  ]
})
export class AppModule {}
