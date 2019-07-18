import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../../core/helper/helper.service';
import { ServicoService } from '../../../core/servicos/servico.service';
import { Pagina } from '../../../shared/interface/pagina';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css']
})
export class PaginasComponent implements OnInit {

  pagina: Pagina;

  constructor(private helper: HelperService, private servico: ServicoService) { }

  ngOnInit() {
    this.servico.getPage(this.helper.getParseURL()).subscribe(
      (pagina: Pagina) => this.pagina = pagina
    )
  }

}
