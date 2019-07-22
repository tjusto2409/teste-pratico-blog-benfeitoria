import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './../config/config.service';
import { Post } from '../../shared/interface/post';

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

  getCategorias() {
    return this.http.get(this.config.url.categorias);
  }

  login(email, senha) {
    return this.http.get(this.config.url.login + `email=${email}&senha=${senha}`);
  }

  savePost(body) {
    return this.http.post(this.config.url.posts, body);
  }

  updatePost(id, body: Post) {
    return this.http.put(this.config.url.posts + id, body);
  }

  deletePost(id) {
    return this.http.delete(this.config.url.posts + id);
  }
}
