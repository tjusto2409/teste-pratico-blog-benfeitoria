import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getPost() {
    return this.http.get(this.config.url.posts)
  }
}
