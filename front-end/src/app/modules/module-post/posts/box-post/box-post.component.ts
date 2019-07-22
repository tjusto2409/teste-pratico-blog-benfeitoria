import { Post } from 'src/app/shared/interface/post';
import { Component, OnInit, Input } from '@angular/core';
import { ServicoService } from '../../../../core/servicos/servico.service';
import { HelperService } from '../../../../core/helper/helper.service';

@Component({
  selector: 'app-box-post',
  templateUrl: './box-post.component.html',
  styleUrls: ['./box-post.component.css']
})
export class BoxPostComponent implements OnInit {

  @Input() post: Post;
  @Input() flag: boolean;

  constructor(private servico: ServicoService, private helper: HelperService) { }

  ngOnInit() {
  }

  verificaImg(img) {
    if(img == null) {
      return 'assets/img/default-post.png'
    } else {
      return img
    }
  }

  excluir(id) {
    event.preventDefault();
    this.helper.alertConfirm('Você tem certeza?', 'Tem certeza que deseja excluir o post?')
    .then((result) => {
      if (result.value) {
        this.servico.deletePost(id).subscribe(
          res => {
            this.helper.alertSucesso('Excluido com sucesso!');
            this.servico.getPosts().subscribe(
              (res:Post) => this.post = res
            )
          }
        )
      }
    })
    
  }

}
