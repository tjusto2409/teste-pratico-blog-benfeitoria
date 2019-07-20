import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  root = 'http://localhost:3000/';
  rootKey = 'blog_benfeitoria_'

  url = {
    posts : this.root+'posts/',
    paginas: this.root+'paginas/',
    login: this.root+'usuario/?'
  };

  storageKey = {
    token: this.rootKey + 'token',
    usuario: this.rootKey + 'usuario',
  };

  constructor() { }
}
