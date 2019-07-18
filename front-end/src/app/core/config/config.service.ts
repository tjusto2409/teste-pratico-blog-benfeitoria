import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  root = 'http://localhost:3000/';

  url = {
    posts : this.root+'posts/',
    paginas: this.root+'paginas/',
  };

  constructor() { }
}
