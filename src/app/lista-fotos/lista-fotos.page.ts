import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FirestoreService} from '../services/firestore.service';

@Component({
  selector: 'app-lista-fotos',
  templateUrl: './lista-fotos.page.html',
  styleUrls: ['./lista-fotos.page.scss'],
})
export class ListaFotosPage implements OnInit {

  listadoDeFotos: any = [];

  cosasLindas: any = [];
  cosasFeas: any = [];
  public load: boolean = true;


  constructor(private fireStore: FirestoreService, public auth: AuthService) 
  {
    // this.fireStore.traerCosasLindas().subscribe(value =>{      
    //   this.cosasLindas = value;
    //   this.cosasLindas.sort(this.ordenamiento);
    // });
    // this.fireStore.traerCosasFeas().subscribe(value =>{
    //   this.cosasFeas = value;
    //   this.cosasFeas.sort(this.ordenamiento);
    // });
    this.load = true;

    this.fireStore.traerCosasLindas().subscribe(value =>{           
      this.cosasLindas = value;

      for(let item of this.cosasLindas){
        this.listadoDeFotos.push(item);
        this.listadoDeFotos.sort(this.ordenamiento);
      }
    }); 

    this.fireStore.traerCosasFeas().subscribe(value =>{      
      this.cosasFeas = value;

      for(let item of this.cosasFeas){
        this.listadoDeFotos.push(item);
        this.listadoDeFotos.sort(this.ordenamiento);
      }
    }); 

    setTimeout(() => {
      this.load = false;
    }, 1500);
    
  }

  ordenamiento(a: any, b:any){
    if (a.hora > b.hora) {
      return -1;
    }
    if (a.hora < b.hora) {
      return 1;
    }

    return 0;
  }

  ngOnInit() {
  }

  onLike(e: any, item : any, i : any){

    let elemento = document.getElementById(i);
    let estiloElemento = window.getComputedStyle(elemento);
    let colorElemento = estiloElemento.getPropertyValue('color');

    if(colorElemento == "rgb(255, 255, 0)"){
      item.like = item.like.filter((like: string) => like != this.auth.logeado.email);
    }else{
      item.like.push(this.auth.logeado.email);
    }

    this.fireStore.modificarFoto(item,item.id);
  }

  onLikeFeas(e: any, itemfeas : any, j : any){

    let elemento = document.getElementById(j);
    let estiloElemento = window.getComputedStyle(elemento);
    let colorElemento = estiloElemento.getPropertyValue('color');

    if(colorElemento == "rgb(255, 255, 0)" || colorElemento == "rgb(153, 153, 153)"){
      itemfeas.like = itemfeas.like.filter((like: string) => like != this.auth.logeado.email);
    }else{
      itemfeas.like.push(this.auth.logeado.email);
    }

    this.fireStore.modificarFotoFeas(itemfeas,itemfeas.id);
  }


}
