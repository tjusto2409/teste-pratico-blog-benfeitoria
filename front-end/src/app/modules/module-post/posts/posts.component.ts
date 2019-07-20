import { Component, OnInit, Input } from '@angular/core';
import { HelperService } from '../../../core/helper/helper.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() posts;
  flag: boolean;

  constructor(private helper: HelperService) { }

  ngOnInit() {
    this.flag = (this.helper.getParseURL() == 'admin');
  }

}
