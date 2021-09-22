import { Injectable } from '@angular/core';
import {usuario} from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios: usuario[]= [
    {
      id: '1',
      nombre : 'juan',
      contraseña: '1234',
      foto: 'https://phantom-marca.unidadeditorial.es/0509cbd44e41f4ffdb98fc8b9867bfe0/resize/1320/f/jpg/assets/multimedia/imagenes/2021/05/12/16208494355539.jpg',
      descripcion: ['Persona de 40 años', 'Trabajador reconocido por su efuerzo'] 
    },
    {
      id: '1',
      nombre : 'juan',
      contraseña: '1234', 
      foto: 'https://depor.com/resizer/2O8MsiVooqhyHIVXiP38uTDwtXA=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/Q2KSOIZI65B57KLYPHKEJXQCOI.jpg',
      descripcion: ['Persona de 59 años', 'Trabajador reconocido por su efuerzo']
    }
  ]
  constructor() { }

  getUsuarios() {
    return [...this.usuarios]
  }
  getUsuario(usuarioId : string) {
    return{
      ...this.usuarios.find(usuario => {
        return usuario.id === usuarioId
      })
    }
  }

  addUsuario(nombre: string, contraseña: string, foto: string) {
    this.usuarios.push({
      id : this.usuarios.length + 1 + "",
      nombre,
      contraseña,
      foto,
      descripcion: []
    })
  }

  deleteUsuario(usuarioId: string) {

  }
}
