import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { PedidoDialogComponent } from 'src/app/components/criar-pedido/pedido-dialog/pedido-dialog.component';
import { ProdDetail } from 'src/app/ProdDetail';
import { ProdutoPedidoService } from 'src/app/services/produto-pedido.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { TransfereService } from 'src/app/services/transfere-dado.service';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-criar-pedido',
  templateUrl: './criar-pedido.component.html',
  styleUrls: ['./criar-pedido.component.scss'],
})
export class CriarPedidoComponent implements OnInit {
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private pedidosAll: ProdutoService,
    private prodPedido: ProdutoPedidoService,
    public transfere: TransfereService
  ) {}

  ngOnInit(): void {
    this.carregaProdutos();
  }

  disableSelect = new FormControl(false);

  produtos: ProdDetail[] = [];
  batata: ProdDetail[] = [];
  value = '';

  tipoB: any;
  opcoes: any[] = [
    { op: 'opt1', type: 'Batata Crua' },
    { op: 'opt2', type: 'Batata Assada' },
    { op: 'opt3', type: 'Purê de batata' },
    { op: 'opt4', type: 'Batata Frita' },
    { op: 'opt5', type: 'Semente de Batata' },
  ];

  displayedColumns: string[] = [
    'id',
    'nome',
    'tipo',
    'valor',
    'quantidade',
    'total',
  ];

  carregaProdutos() {
    this.pedidosAll.listaProdutosAll().subscribe((prod: any) => {
      this.produtos = prod;
      this.batata = prod;
    });
  }

  //verifica se a checkbox ta marcada
  onChangeDemo(ob: MatCheckboxChange) {
    if (ob.checked) {
      this.batata = this.produtos;
    }
  }

  //muda o tipo de batata
  selecionaTipo(o: Event) {
    let t = String(o);

    switch (t) {
      case 'opt1':
        this.tipoB = 'batataCrua';
        break;
      case 'opt2':
        this.tipoB = 'batataAssada';
        break;
      case 'opt3':
        this.tipoB = 'batataPure';
        break;
      case 'opt4':
        this.tipoB = 'batataFrita';
        break;
      case 'opt5':
        this.tipoB = 'batataSemente';
        break;

      default:
        this.batata;
        break;
    }

    this.batata = this.produtos.filter((t) => t.tipo == this.tipoB);
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.batata = this.produtos.filter((b) => {
      return b.nome.includes(value);
    });
  }

  addQTD(prod: any) {
    let tot: any;

    const batatas = this.produtos.filter((o) => o.id == prod.id);
    batatas.forEach((item) => {
      item.qtd++;
    });
    tot = prod.valor * prod.qtd;
    const tot2 = tot.toFixed(2);
    batatas.forEach((item) => {
      item.total = tot2;
    });
  }

  subQTD(prod: any) {
    let tot: any;

    const batatas = this.produtos.filter((o) => o.id == prod.id);
    batatas.forEach((item) => {
      if (item.qtd > 0) {
        item.qtd--;
      } else {
        item.qtd = 0;
      }
    });

    tot = prod.valor * prod.qtd;
    const tot2 = tot.toFixed(2);
    batatas.forEach((item) => {
      item.total = tot2;
    });
  }

  somaPagar() {
    let aPagar: any[] = [];
    const batatas = this.produtos.filter((o) => o.total > 0);
    batatas.forEach((item) => {
      aPagar.push(Number(item.total));
    });

    const result = aPagar.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);
    const resultado = result.toFixed(2);

    this.totalPedido = resultado;

    return resultado;
  }

  totalPedido: any;

  fechaPedido() {
    const batatas = this.produtos.filter((o) => o.total > 0);

    localStorage.setItem('produto-pedido', JSON.stringify(batatas));

    let id;

    this.prodPedido.setPedidos(batatas).subscribe((m) => {
      id = Object.values(m);

      this.transfere.setData2(id[3]);
      console.log(id);
    });

    localStorage.setItem('total-pedido', JSON.stringify(this.totalPedido));
  }

  openDialog() {
    const dialogRef = this.dialog.open(PedidoDialogComponent, {
      restoreFocus: false,
    });
  }
}
