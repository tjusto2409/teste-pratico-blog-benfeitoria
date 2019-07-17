import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  root = 'http://localhost/Projetos/post-json/json/';

  url = {
    posts : this.root+'posts.json'
  };

  constructor() { }
}
