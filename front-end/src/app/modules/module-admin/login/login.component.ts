import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import * as sha1 from 'js-sha1';

import { ServicoService } from './../../../core/servicos/servico.service';
import { ConfigService } from './../../../core/config/config.service';
import { HelperService } from './../../../core/helper/helper.service';

import { Usuario } from './../../../shared/interface/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBulder: FormBuilder, private helper: HelperService,
    private config: ConfigService, private servico: ServicoService) { }

  ngOnInit() {
    this.form = this.formBulder.group({
      'email': [null, Validators.required, Validators.email],
      'senha': [null, Validators.required]
    });
  }

  logar() {
    if(this.form.value) {
      this.servico.login(this.form.get('email').value, this.form.get('senha').value)
        .subscribe(
          (res: Usuario[]) => {
            if(res.length > 0) {
              this.helper.setStorage(this.config.storageKey.usuario, {
                "id" : res[0].id,
                "usuario" : res[0].usuario,
                "email" : res[0].email
              });
              this.helper.setStorage(this.config.storageKey.token, sha1(this.form.value));
              this.helper.next('/admin');
            }
            else {
              alert('erro');
            }
          }
        );
    }
  }

}
