import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/core/servicos/servico.service';
import { Post } from 'src/app/shared/interface/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  main: Post = {
    titulo : "Não temos Posts há exibir.",
    categoria_id: '1',
    id: 1,
    autor: '',
    texto: '',
    img: ''
  };

  posts: Post[] = [];

  constructor(private servico: ServicoService) { }

  ngOnInit() {
    this.servico.getPosts().subscribe(
      (posts: Post[]) => {
        if(posts.length > 0) {

          for(let i=1; i < posts.length; i++) {
            this.posts.push(posts[i]);
          }

          this.main = posts[0];
        }
      }
    );
  }

}
