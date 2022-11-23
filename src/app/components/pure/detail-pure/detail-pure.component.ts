import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/Produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { TransfereService } from 'src/app/services/transfere-dado.service';

@Component({
  selector: 'app-detail-pure',
  templateUrl: './detail-pure.component.html',
  styleUrls: ['./detail-pure.component.scss'],
})
export class DetailPureComponent implements OnInit {
  constructor(
    private transfereService: TransfereService,
    public router: Router,
    private produtosAll: ProdutoService
  ) {}

  produtos: Produto[] = [];

  ngOnInit(): void {
    this.batata = this.transfereService.getData();

    this.produtosAll.listaProdutosAll().subscribe((prod) => {
      this.produtos = prod.filter((batata: any) => batata.tipo == 'batataPure');

      const busca = this.produtos[this.batata];

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
