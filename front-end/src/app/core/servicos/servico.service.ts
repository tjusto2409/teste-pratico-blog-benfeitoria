import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getPosts() {
    return this.http.get(this.config.url.posts);
  }

  getPost(id) {
    return this.http.get(this.config.url.posts + id);
  }

  getPage(pagina) {
    return this.http.get(this.config.url.paginas + pagina);
  }

  login(email, senha) {
    return this.http.get(this.config.url.login + `email=${email}&senha=${senha}`);
  }
}
