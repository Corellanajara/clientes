import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';
import { ClientePage } from '../cliente/cliente';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items :any ;
  constructor(public clientes : ClientesProvider,public navCtrl: NavController) {
    this.updateInfo();
  }
  ionViewDidLoad(){
    this.updateInfo();
  }

  abrir(item){
    this.navCtrl.push(ClientePage,{item:item});
  }
  mensajear(item){
    alert('aun no creado');
  }
  borrar(item){

    this.clientes.deleteCliente(item);

    this.items = this.items.filter( x => this.filtros(x,item) );
    
  }
  updateInfo(){
    this.clientes.getClientes()
    .then( data =>{
      this.items = data;

      this.clientes.setClientes(data);
    });
  }
  filtros(original,item){
    if(original==item){
      return false;
    }
    return true;
  }
}
