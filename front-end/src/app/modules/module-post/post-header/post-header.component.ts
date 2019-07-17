import { Component, OnInit, Input } from '@angular/core';

import { Post } from './../../../shared/interface/post';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class PostHeaderComponent implements OnInit {

  @Input() main: Post;

  constructor() { }

  ngOnInit() {
  }

}
