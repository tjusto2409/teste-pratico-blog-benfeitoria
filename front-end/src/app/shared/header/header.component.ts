import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../../core/servicos/servico.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  categorias;

  constructor(private servico: ServicoService) { }

  ngOnInit() {
    this.servico.getCategorias().subscribe(
      categorias => this.categorias = categorias
    )
  }

  open(nav){
    nav.classList.add('open');
  }

  fechar(nav) {
    nav.classList.remove('open');
  }

}
