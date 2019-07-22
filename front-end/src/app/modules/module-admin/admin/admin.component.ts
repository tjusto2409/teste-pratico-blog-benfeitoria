import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../../core/helper/helper.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private helper: HelperService) { }

  ngOnInit() {
  }

  sair() {
    event.preventDefault();
    localStorage.clear();
    this.helper.next('/');
  }

}
