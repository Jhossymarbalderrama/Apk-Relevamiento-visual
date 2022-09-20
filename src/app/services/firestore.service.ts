import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { orderBy } from 'firebase/firestore';

import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService implements OnInit{

  public cosasLindasCollectionReference: any;
  public cosasLindas: Observable<any>;
  
  public cosasFeasCollectionReference: any;
  public cosasFeas: Observable<any>;

  public cosasLindasArray: any = [];
  public cosasFeasArray: any = [];

  constructor(public FireStore: AngularFirestore, public AngularFS : AngularFireStorage) 
  {    

    this.cosasLindasCollectionReference = this.FireStore.collection<any>('cosasLindas');
    this.cosasLindas = this.cosasLindasCollectionReference.valueChanges({idField: 'id'});
    this.cosasFeasCollectionReference = this.FireStore.collection<any>('cosasFeas');
    this.cosasFeas = this.cosasFeasCollectionReference.valueChanges({idField: 'id'});  
  }

  ngOnInit(){     

    this.traerCosasLindas().subscribe(value=>{  
      this.cosasLindasArray = value;
    });

    this.traerCosasFeas().subscribe(value =>{      
      this.cosasFeasArray = value;
    });

  }



  traerCosasLindas(){
    return this.cosasLindas;
  }

  traerCosasFeas(){
     return this.cosasFeas;
  }

  modificarFoto(objeto : any, id_objeto: any ){
    return this.FireStore.collection('cosasLindas').doc(id_objeto).update(objeto);
  }

  modificarFotoFeas(objeto : any, id_objeto: any ){
    return this.FireStore.collection('cosasFeas').doc(id_objeto).update(objeto);
  }
  
  async crearUsuario(collection: any, dato: any){
    return await this.FireStore.collection(collection).add(dato);
  }
}
