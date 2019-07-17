import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/core/servicos/servico.service';
import { Post } from 'src/app/shared/interface/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  main: Post;
  posts: Post[] = [];

  constructor(private servico: ServicoService) { }

  ngOnInit() {
    this.servico.getPost().subscribe(
      (posts: Post[]) => {
        for(let i=1; i < posts.length; i++) {
          this.posts.push(posts[i]);
        }

        this.main = posts[0];
      }
    );
  }

}
