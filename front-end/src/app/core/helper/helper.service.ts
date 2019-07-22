import { Injectable } from '@angular/core';
import { Router, UrlSegment, PRIMARY_OUTLET } from '@angular/router';

import { ConfigService } from './../config/config.service';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private router: Router, private config: ConfigService) { }

  next(rota) {
    this.router.navigate([rota]);
  }

  getURL() {
    const segment: UrlSegment[] = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET].segments;
    return segment;
  }

  getParseURL() {
    return this.getURL()[0].path;
  }  

  // alertWarning(text, confirm, cancel = 'Cancelar') {
  //   return swal({
  //     icon: 'warning',
  //     title: 'Fique Atento!',
  //     text: text,
  //     buttons: {
  //       confirm: {
  //         text: confirm
  //       },
  //       cancel: {
  //         text: cancel,
  //         visible: true
  //       }
  //     }
  //   });
  // }

  // alertError(text, title = 'Erro ao processar sua recarga!') {
  //   return swal({
  //     icon: 'error',
  //     title: title,
  //     text: text
  //   });
  // }

  // alertSucesso(text, title = 'Recarga efetuada com sucesso!') {
  //   return swal({
  //     icon: 'success',
  //     title: title,
  //     text: text
  //   });
  // }

  setStorage(chave, valor){
    localStorage.setItem(chave, JSON.stringify(valor));
  }

  getStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
  }

  removeStorage(chave) {
    localStorage.removeItem(chave);
  }
}
