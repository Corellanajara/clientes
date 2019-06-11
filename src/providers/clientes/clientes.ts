
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Generated class for the ClientesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientesProvider {

  items = [];
  clientes : any;
  constructor(private storage: Storage) {}

  async getClientes(): Promise<void>{
    return this.clientes = await this.storage.get('clientes');
  }
  setClientes(items){
    if(items){
        this.items = items;
    }else{
        this.items = [];
    }
        
  }
  addCliente(item){
    console.log(this.items);
    this.items.push(item);
    this.updateStorage();
  }
  updateCliente(item,original){
    this.items.map(x => this.actualizar(original,item,x) );
    this.updateStorage();
  }
  deleteCliente(item){
    this.items = this.items.filter( x => this.filtros(x,item) );
    this.updateStorage();
  }
  updateStorage(){
    console.log("setear clientes",this.items);
    this.storage.set("clientes",this.items);
  }
  filtros(original,item){
    if(original==item){
      return false;
    }
    return true;
  }
  actualizar(original,item,x){
    if(original==x){
      x = item;
    }
    return x;
  }
}
