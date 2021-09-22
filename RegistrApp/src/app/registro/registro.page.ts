import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';
import {UsuariosService } from './usuarios.service'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro : FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      'nombre' : new FormControl("", Validators.required),
      'contraseña' : new FormControl("", Validators.required),
    })
  }
  ngOnInit() {
    
  }
  async guardar(){
    var f = this.formularioRegistro.value;
    
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        message: 'Debes completar todos los campos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }
    var usuario = {
      nombre : f.nombre,
      contraseña : f.contraseña
    }
    localStorage.setItem('usuario',JSON.stringify(usuario))
  }
}
