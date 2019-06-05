import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: UsersService) { }
  //VARIABLE QUE ALMACENARA INFORMACION DE LOS USUARIOS
  users: any;
  user:any = null;

  //INICIALIZACION DE MAPA
  map: boolean = false;
  texto : string;
  lat: number = 0;
  lng: number = 0;
  //Zoom en 1 ya que las coordenadas no permiten mostrar bien el cambio de locacion del en el mapa
  zoom: number = 1;
  //FUNCIONES A EJECUTAR EL INICIAR COMPONENTE
  ngOnInit() {
    this.getUsers();
  }
  //OBTENER LISTA DE USUARIOS
  getUsers(){
    this.users = [];
    this.api.getUsers().subscribe(resp =>{
      this.users = resp;
    });
  }
  //VER DETALLE DE USUARIO
  openDetail(user){
    this.user = user;
    this.texto = 'Wenceslau Braz - Cuidado com as cargas';
    this.lat = +this.user.address.geo.lat;
    this.lng = +this.user.address.geo.lng;
    $("#modalDetalle").modal({
      show: true,
      backdrop:"static",
      keyboard: false
    });
    this.map = true;
  }
}
