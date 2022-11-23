import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Produto';
import { TransfereService } from 'src/app/services/transfere-dado.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-batatas',
  templateUrl: './batatas.component.html',
  styleUrls: ['./batatas.component.scss'],
})
export class BatatasComponent implements OnInit {
  constructor(
    private router: Router,
    private transfereService: TransfereService,
    private produto: ProdutoService
  ) {}

  ngOnInit(): void {
    this.carregaBatatas();
  }

  produtos: Produto[] = [];

  carregaBatatas() {
    this.produto.listaProdutosAll().subscribe((prod) => {
      this.produtos = prod.filter((batata: any) => batata.tipo == 'batataCrua');
    });
  }

  redirectDetail(id: any) {
    this.transfereService.setData(id);
    this.router.navigate(['/detail-batata']);
  }
}
