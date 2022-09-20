import { Component, Input, Output , EventEmitter} from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../services/auth.service';

import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public seccion: string;
  @Output() evento = new EventEmitter<string>();
  
  private email: any;
  public load: boolean = false;

  constructor(
    private authSvc:AuthService, 
    private router: Router, 
    private afAuth: AngularFireAuth,
    private activatedRoute: ActivatedRoute,
    public loadingController: LoadingController
  ) {}
  
  ngOnInit(){
    this.email = localStorage.getItem('email');   
  }
  
  onLogout(){        
    this.load = true;

    setTimeout(() => {
      this.load = false;      
      this.afAuth.signOut();
      this.router.navigateByUrl('/login');  
    }, 500);     
  }

  onCosasLindas(){
    //this.seccion = true;
    this.seccion = "cosasLindas";
    this.evento.emit(this.seccion);
  }

  onCosasFeas(){
    // this.seccion = false;
    this.seccion = "cosasFeas";
    this.evento.emit(this.seccion);
  }

}
