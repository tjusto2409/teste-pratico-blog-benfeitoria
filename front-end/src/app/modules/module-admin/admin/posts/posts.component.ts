import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/core/servicos/servico.service';

import { Post } from 'src/app/shared/interface/post';

@Component({
  selector: 'app-post',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private servico: ServicoService) { }

  ngOnInit() {

    this.servico.getPosts().subscribe(
      (posts: Post[]) => {
        console.log(posts)
        this.posts = posts;
      }
    );
  }

}
