import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FirestoreService} from '../services/firestore.service';

@Component({
  selector: 'app-listadofotosfeas',
  templateUrl: './listadofotosfeas.page.html',
  styleUrls: ['./listadofotosfeas.page.scss'],
})
export class ListadofotosfeasPage implements OnInit {
  megusta: boolean = true;

  //cosasLindas: any = [];
  cosasFeas: any = [];
  public load: boolean = true;

  constructor(private fireStore: FirestoreService,public auth: AuthService) { 

    
    
    this.fireStore.traerCosasFeas().subscribe(value =>{
      this.load = true;

      this.cosasFeas = value;
      this.cosasFeas.sort(this.ordenamiento);

      setTimeout(() => {
        this.load = false;
      }, 2000);
    });

    
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

    this.fireStore.modificarFotoFeas(item,item.id);
  }
}
