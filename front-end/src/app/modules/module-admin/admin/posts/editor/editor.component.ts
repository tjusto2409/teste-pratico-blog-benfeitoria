import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { ConfigService } from '../../../../../core/config/config.service';
import { ServicoService } from '../../../../../core/servicos/servico.service';
import { HelperService } from '../../../../../core/helper/helper.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../../../shared/interface/post';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  public Editor = ClassicEditor;
  form: FormGroup;
  titulo: string;
  id: number;

  constructor(private formBulder: FormBuilder, 
    private servico: ServicoService,
    private helper: HelperService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.form = this.formBulder.group({
      'titulo': [null, Validators.required],
      'autor': [null, Validators.required],
      'categoria_id': ['Escolha a categoria', Validators.required],
      'img': null,
      'texto': [null, Validators.required],
    });

    this.carregaDadosPost()
  }

  verificaURLEditar(): boolean {
    // console.log(this.helper.getURL()[2].path);
    if(this.helper.getURL()[2].path == 'editar') {
      this.titulo = "Editar Post";
      return true
    }
    this.titulo = "Adicionar Post";
    return false
  }

  carregaDadosPost() {
    if(this.verificaURLEditar()) {
      // console.log('editar')
      this.route.params.subscribe(params => {
        this.servico.getPost(params.id).subscribe(
          (post: Post) => {
            console.log(post);
            this.id = post.id;
            this.form.controls['titulo'].setValue(post.titulo);
            this.form.controls['autor'].setValue(post.autor);
            this.form.controls['categoria_id'].setValue(post.categoria_id);
            // this.form.controls['img'].setValue(post.img);
            this.form.controls['texto'].setValue(post.texto);
          }
        )
      })
    }
  }

  salvar() {
    if(this.form.valid) {
      if(this.verificaURLEditar()) {    
        this.servico.updatePost(this.id, this.form.value).subscribe(
          res => console.log(res)
        )
      }
      else {
        this.servico.savePost(this.form.value).subscribe(
          res => console.log(res)
        )
      }
    }
    
  }
}
