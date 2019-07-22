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

  open(nav, box){
    console.log(nav.children[1].classList.add('open'))
    nav.classList.add('open');
    nav.children[1].classList.add('open');
    box.style.display = 'none';
    // nav.
  }

  fechar(nav, box) {
    nav.classList.remove('open');
    box.style.display = 'block';
  }

  sair() {
    event.preventDefault();
    localStorage.clear();
    this.helper.next('/');
  }

}
