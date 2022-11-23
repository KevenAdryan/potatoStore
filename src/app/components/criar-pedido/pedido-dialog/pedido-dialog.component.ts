import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CriarPedidoComponent } from 'src/app/components/criar-pedido/criar-pedido.component';
import { ProdutoPedidoService } from 'src/app/services/produto-pedido.service';
import { TransfereService } from 'src/app/services/transfere-dado.service';

@Component({
  selector: 'app-pedido-dialog',
  templateUrl: './pedido-dialog.component.html',
  styleUrls: ['./pedido-dialog.component.scss'],
})
export class PedidoDialogComponent implements OnInit, OnDestroy {
  constructor(
    public dialogRef: MatDialogRef<CriarPedidoComponent>,
    public router: Router,
    public t: TransfereService,
    private p: ProdutoPedidoService
  ) {}

  ngOnInit(): void {
    console.log(this.id);

    //pega obj local storage
    this.prodPedido = JSON.parse(
      localStorage.getItem('produto-pedido') || '[]'
    );
    localStorage.removeItem('produto-pedido');

    this.totalPedido = JSON.parse(localStorage.getItem('total-pedido') || '[]');
    this.totalPedidoNum = Number(this.totalPedido);
    localStorage.removeItem('total-pedido');
  }

  ngOnDestroy(): void {
    this.id = this.t.getData2();

    if (this.pressionado) {
      this.p.patchPedido(this.id, this.totalPedido).subscribe();
    } else {
      this.p.getPedidos().subscribe((pro) => {
        let pdd;
        pdd = pro.filter((p: any) => p.status == 'provisorio');
        pdd.forEach((m: any) => {
          this.p.deletePedido(m.id).subscribe();
        });
      });
    }
  }

  id: any = this.t.getData2();

  prodPedido: any[] = [];

  totalPedido: any = '';

  totalPedidoNum: any;

  pressionado: boolean = false;

  finalizaPedido() {
    this.id = this.t.getData2();

    localStorage.setItem('total-pedido', JSON.stringify(this.totalPedido));

    this.router.navigateByUrl('/pagamento');
  }
}
