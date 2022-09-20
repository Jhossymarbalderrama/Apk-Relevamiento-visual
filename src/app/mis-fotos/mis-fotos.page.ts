import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FirestoreService} from '../services/firestore.service';

@Component({
  selector: 'app-mis-fotos',
  templateUrl: './mis-fotos.page.html',
  styleUrls: ['./mis-fotos.page.scss'],
})
export class MisFotosPage implements OnInit {

  misFotos: any = [];
  cosasLindas: any = [];
  cosasFeas: any = [];
  public load: boolean = true;

  constructor(public fireStore: FirestoreService, public auth: AuthService) 
  {
    this.fireStore.traerCosasLindas().subscribe(value =>{     
      
      this.cosasLindas = value;
      this.load = true;

      for(let item of this.cosasLindas){
        if(item.email == this.auth.logeado.email){
          this.misFotos.push(item);
          this.misFotos.sort(this.ordenamiento);
        }
      }

      setTimeout(() => {
        this.load = false;
      }, 1500);

    }); 
    

    this.fireStore.traerCosasFeas().subscribe(value =>{      
      this.cosasFeas = value;

      for(let item of this.cosasFeas){
        if(item.email == this.auth.logeado.email){
          this.misFotos.push(item);
          this.misFotos.sort(this.ordenamiento);
        }
      }
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

}
