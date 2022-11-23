import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/Produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { TransfereService } from 'src/app/services/transfere-dado.service';

@Component({
  selector: 'app-sementes',
  templateUrl: './sementes.component.html',
  styleUrls: ['./sementes.component.scss'],
})
export class SementesComponent implements OnInit {
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
      this.produtos = prod.filter(
        (batata: any) => batata.tipo == 'batataSemente'
      );
    });
  }
  redirectDetail(id: any) {
    this.transfereService.setData(id);
    this.router.navigate(['/detail-sementes']);
  }
}
