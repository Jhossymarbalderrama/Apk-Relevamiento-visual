import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MenuController } from '@ionic/angular';

import { PhotoService } from '../servicesCamara/photo.service';
import { AuthService } from '../services/auth.service';
import {LoginPage} from '../login/login.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  private titulo: string;
  public load: boolean = true;
  private pag_home: boolean;
  private pag_listafotos: boolean;
  private pag_misfotos: boolean;
  private pag_graficos: boolean;
  private pag_listadocosasfeas: boolean;
  private pag_listadocosaslindas: boolean;

  private camaraIcon:boolean = false;
  public urlFotoSubida: string;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private menu: MenuController,
    public photoService: PhotoService,
    public auth: AuthService
    ) { 
      this.pag_home = true;
      this.pag_listafotos = false;
      this.pag_misfotos = false;
      this.pag_graficos = false;
      
      this.pag_listadocosasfeas = false;
      this.pag_listadocosaslindas = false;

      this.menu.close('end');
    }

  ngOnInit() {
    this.titulo = "Inicio";    

  }

  addPhotoToGallery(){  
    let dato = {
      'email': this.auth.logeado.email,
      'hora': '',
      'like': [],
      'pathFoto': ''
    };    

    if(this.pag_listadocosasfeas == true){     
      this.photoService.addNewToGallery(dato,'cosasFeas');         
    }

    if(this.pag_listadocosaslindas == true){
      this.photoService.addNewToGallery(dato,'cosasLindas');   
    }
    
    //console.log(dato);
    
  }


  getEvento(e){
    switch (e) {
      case "cosasFeas":
        this.onRedirect("ListadoCosasFeas");
        break;    
      case "cosasLindas":
        this.onRedirect("ListadoCosasLindas");
        break;
    }
    
  }

  onRedirect(redirect: string){
    switch (redirect) {
      case 'Inicio':        
        this.load = false;
        
        setTimeout(() => {
          this.load = true;
          
          this.pag_home = true;
          this.pag_listafotos = false;
          this.pag_misfotos = false;
          this.pag_graficos = false;
          this.camaraIcon = false;
          this.pag_listadocosasfeas = false;
          this.pag_listadocosaslindas = false;
          this.titulo = "Inicio";
          this.menu.close('end');
        }, 1000);
      break;
      case 'Listado':
        this.load = false;      

        setTimeout(() => {
          this.load = true;
          
          this.pag_home = false;
          this.pag_listafotos = true;
          this.pag_misfotos = false;
          this.pag_graficos = false;
          this.camaraIcon = false;
          this.pag_listadocosasfeas = false;
          this.pag_listadocosaslindas = false;
          this.titulo = "Listado de Fotos";
          this.menu.close('end');
        }, 1000);
      break;
      case 'ListadoCosasFeas':
        this.load = false;      

        setTimeout(() => {
          this.load = true;
          
          this.pag_home = false;
          this.pag_listafotos = false;
          this.pag_misfotos = false;
          this.pag_graficos = false;
          this.camaraIcon = true;
          this.pag_listadocosasfeas = true;
          this.pag_listadocosaslindas = false;
          this.titulo = "Listado de Fotos Feas";
          this.menu.close('end');
        }, 1000);
        break;
      case 'ListadoCosasLindas':
        this.load = false;      

        setTimeout(() => {
          this.load = true;
          
          this.pag_home = false;
          this.pag_listafotos = false;
          this.pag_misfotos = false;
          this.pag_graficos = false;
          this.camaraIcon = true;
          this.pag_listadocosaslindas = true;
          this.pag_listadocosasfeas = false;
          this.titulo = "Listado de Fotos Lindas";
          this.menu.close('end');
        }, 1000);
        break;



      case 'MisFotos':             
        this.load = false;

        setTimeout(() => {
          this.load = true;
          
          this.pag_home = false;
          this.pag_listafotos = false;
          this.pag_misfotos = true;
          this.pag_graficos = false;
          this.camaraIcon = false;
          this.titulo = "Mis Fotos";  
          this.pag_listadocosaslindas = false;
          this.pag_listadocosasfeas = false;
          this.menu.close('end');
        }, 1000);
      break;
      case 'Graficos':        
        this.load = false;

        setTimeout(() => {
          this.load = true;
          
          this.pag_home = false;
          this.pag_listafotos = false;
          this.pag_misfotos = false;
          this.pag_graficos = true;
          this.camaraIcon = false;
          this.pag_listadocosaslindas = false;
          this.pag_listadocosasfeas = false;
          this.titulo = "Graficos de Fotos"
          this.menu.close('end');
        }, 1000);         
      break;
      case 'CerrarSesion':
        //this.menu.close('end');
        this.load = false;
        
        setTimeout(() => {
          this.load = true;


          this.pag_home = true;
          this.pag_listafotos = false;
          this.pag_misfotos = false;
          this.pag_graficos = false;
          this.camaraIcon = false;
          this.pag_listadocosaslindas = false;
          this.pag_listadocosasfeas = false;
          this.titulo = "Inicio";          
          this.menu.close('end');
          
          localStorage.removeItem('email');
          this.afAuth.signOut();
          this.router.navigateByUrl('/login');  
        }, 1000);     
      break;
    
    }
  }
}
