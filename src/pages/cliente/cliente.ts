import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';
import { TabsPage } from '../tabs/tabs';
//import { Storage } from '@ionic/storage';

/**
 * Generated class for the ClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {

  item = {estado:'pendiente',nombre:'',direccion:'',telefono:'', correo:'',comentarios:''};
  original = [];
  constructor(public clientes : ClientesProvider,public navCtrl: NavController, public navParams: NavParams){//,private storage: Storage) {
    if(this.navParams.get('item')){
      this.item = this.navParams.get('item');
      this.original = this.navParams.get('item');
    }
  }

  actualizar(){
    this.clientes.updateCliente(this.item,this.original);
    this.navCtrl.pop();
  }
  agregar(){
    //this.storage.set("clientes",this.item);
    this.clientes.addCliente(this.item);
    this.navCtrl.setRoot(TabsPage);
  }


}
