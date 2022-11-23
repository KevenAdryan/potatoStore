import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProdDetail } from 'src/app/ProdDetail';
import { ProdutoService } from 'src/app/services/produto.service';
import { TransfereService } from 'src/app/services/transfere-dado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private transfereService: TransfereService,
    private pedidosAll: ProdutoService
  ) {}

  ngOnInit(): void {
    this.carregaProdutos();
  }

  produtos: ProdDetail[] = [];

  batata: ProdDetail[] = [];

  sidenav_opened = false;
  value = '';

  carregaProdutos() {
    this.pedidosAll.listaProdutosAll().subscribe((prod: any) => {
      this.produtos = prod;
      this.batata = prod;
    });
  }

  redirectDetail(id: any) {
    this.transfereService.setData(id);
    this.router.navigate(['/detail-produtos']);
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.batata = this.produtos.filter((b) => {
      return b.nome.includes(value);
    });
  }
}
