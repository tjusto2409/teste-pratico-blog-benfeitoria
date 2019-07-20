import { Post } from 'src/app/shared/interface/post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-post',
  templateUrl: './box-post.component.html',
  styleUrls: ['./box-post.component.css']
})
export class BoxPostComponent implements OnInit {

  @Input() post: Post;
  @Input() flag: boolean;

  constructor() { }

  ngOnInit() {
  }

  excluir(id) {
    event.preventDefault();
  }

}
