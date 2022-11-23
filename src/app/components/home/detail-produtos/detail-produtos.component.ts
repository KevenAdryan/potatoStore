import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';
import { TransfereService } from 'src/app/services/transfere-dado.service';

@Component({
  selector: 'app-detail-produtos',
  templateUrl: './detail-produtos.component.html',
  styleUrls: ['./detail-produtos.component.scss'],
})
export class DetailProdutosComponent implements OnInit {
  constructor(
    private transfereService: TransfereService,
    public router: Router,
    private produtosAll: ProdutoService
  ) {}

  ngOnInit(): void {
    this.batata = this.transfereService.getData();

    this.produtosAll.listaProdutosAll().subscribe((produtos) => {
      const busca = produtos.find((el: any) => {
        if (this.batata == el.id) {
          return true;
        }
        return false;
      });

      this.img = busca?.url;
      this.valor = busca?.valor;
      this.nome = busca?.nome;
    });
  }

  batata: any;
  img: any;
  valor: any;
  nome: any;

  redirectPedido() {
    this.router.navigateByUrl('/criar-pedido');
  }
}
