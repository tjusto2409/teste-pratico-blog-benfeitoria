import { Component, OnInit, Input } from '@angular/core';

import { Post } from './../../../shared/interface/post';
import { HelperService } from '../../../core/helper/helper.service';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class PostHeaderComponent implements OnInit {

  @Input() main: Post;
  flag: boolean;

  constructor(private helper: HelperService) { }

  ngOnInit() {
    this.flag = (this.helper.getParseURL() == 'post-detail');
  }

  verificaImg(img) {
    if(img == 'assets/img/default-post.png') {
      return ''
    } else {
      return img
    }
  }

}
