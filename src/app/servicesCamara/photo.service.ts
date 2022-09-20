import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { getStorage, ref, uploadString } from "firebase/storage"
import { AuthService } from '../services/auth.service';

import { AngularFireStorage } from '@angular/fire/compat/storage';

import { FirestoreService } from '../services/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(public auth : AuthService, private AfireStore : AngularFireStorage, private fservice: FirestoreService) { }

  public async addNewToGallery(datos: any, colleccion:any ){
    
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100,
      webUseInput: true
    });

    let storage = getStorage();
    let date = new Date().getTime();
    let fecha = new Date();
    let fechaFinal = String(fecha.getDate()).padStart(2, '0') + '-' + String(fecha.getMonth() + 1).padStart(2, '0') + '-' + fecha.getFullYear();
    
    datos.hora = fechaFinal;

    let nombre = `${this.auth.logeado.email} ${date}`;

    let storageRef = ref(storage, nombre);

    let url = this.AfireStore.ref(nombre);

    uploadString(storageRef,capturedPhoto.dataUrl, 'data_url').then(()=>{
      url.getDownloadURL().subscribe((urlfoto:any)=>{     
          datos.pathFoto = urlfoto;
          //console.log(datos);
          this.fservice.crearUsuario(colleccion,datos);
      })
    });   
  }
}



