import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.page.html',
  styleUrls: ['./iniciarsesion.page.scss'],
})
export class IniciarsesionPage implements OnInit {

  formularioLogin: FormGroup;


  constructor(public fb: FormBuilder, public alertController: AlertController) {
    this.formularioLogin = this.fb.group({
      'nombre' : new FormControl("", Validators.required),
      'contraseña' : new FormControl("", Validators.required),
    })
  }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.contraseña == f.contraseña){
      console.log('Ingresado correctamente');

    }else{
      const alert = await this.alertController.create({
        message: 'Datos Incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }
  }
}
