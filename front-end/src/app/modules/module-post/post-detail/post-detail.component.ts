import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from '../../../core/servicos/servico.service';
import { Post } from '../../../shared/interface/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute, private servico: ServicoService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.servico.getPost(params['id']).subscribe(
          (post: Post) => this.post = post
        )
      }
    )
  }

}
