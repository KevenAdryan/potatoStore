import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  TipoCartão,
  tipoPagamento,
  tipoPagCartao,
  tipoParcela,
  tipoPix,
} from 'src/app/listas/listaPagamento';
import { CepServiceService } from 'src/app/services/cep-service.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { TransfereService } from 'src/app/services/transfere-dado.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
})
export class PagamentoComponent implements OnInit {
  constructor(
    private cepService: CepServiceService,
    private pedidos: PedidosService,
    public transfere: TransfereService
  ) {
    const meses = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
    ];

    let date = new Date();

    let dataFormatada =
      date.getDate() + '/' + meses[date.getMonth()] + '/' + date.getFullYear();
    let hora =
      date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    this.data = dataFormatada;
    this.hora = hora;
  }

  ngOnInit(): void {
    this.selecionaParcela();
    this.id = this.transfere.getData2();
    //console.log(this.id);
  }

  id: any;
  //selects
  disableSelect = new FormControl(false);

  opcoesPagamento: any[] = tipoPagamento;

  opcoesPix: any[] = tipoPix;

  opcoesPagCartao: any[] = tipoPagCartao;
  opcoesCartao: any[] = TipoCartão;

  opcoesParcelamento: any[] = tipoParcela;

  parcelaSelecionada: boolean = false;
  //
  //aparecer ou não as opções
  cartao: boolean = false;
  pix: boolean = false;

  img: boolean = false;
  copiaecola: boolean = false;
  pixLoja: boolean = false;

  credito: boolean = false;
  debito: boolean = false;

  parcelas: any[] = [];

  finalizaCompra: boolean = false;
  //

  numCard: String = '';
  venc: String = '';
  cvc: String = '';

  cepValor: boolean = false;

  UFPreenchida: boolean = false;
  //
  // pega valor do pedido
  totalPedido = JSON.parse(localStorage.getItem('total-pedido') || '[]');
  totalPedidoNum = Number(this.totalPedido);
  //

  // endereço
  cep: string = '';
  logradouro: string = '';
  bairro: string = '';
  cidade: string = '';
  uf: string = '';
  //

  //parcelas
  parcela: string = '';
  //

  //
  data: string = '';
  hora: string = '';
  //

  //
  metPag: string = '';
  tipPag: string = '';
  //

  //
  user: string = JSON.parse(localStorage.getItem('user') || '[]');
  //

  // Seleciona metodo de pagamento
  selecionaCartao(o: Event) {
    let t = String(o);

    switch (t) {
      case 'opt1':
        this.cartao = false;
        this.pix = true;

        this.metPag = 'Pix';
        break;
      case 'opt2':
        this.cartao = true;
        this.pix = false;

        this.metPag = 'Cartão';
        break;

      default:
        break;
    }
  }

  pixSelecionado: boolean = false;

  //seleciona tipo de pix
  selecionaPix(o: Event) {
    let t = String(o);

    switch (t) {
      case 'opt1':
        this.img = true;
        this.copiaecola = false;
        this.pixLoja = false;
        this.pixSelecionado = true;

        this.tipPag = 'Qr-Code';
        break;
      case 'opt2':
        this.img = false;
        this.copiaecola = true;
        this.pixLoja = false;
        this.pixSelecionado = true;

        this.tipPag = 'Copia-e-cola';
        break;
      case 'opt3':
        this.img = false;
        this.copiaecola = false;
        this.pixLoja = true;
        this.pixSelecionado = true;

        this.tipPag = 'Pix da loja';
        break;

      default:
        break;
    }
  }

  //seleciona tipo de pagamento-cartão
  selecionaPagCartao(o: Event) {
    let t = String(o);

    switch (t) {
      case 'opt1':
        this.credito = true;

        this.tipPag = 'Credito';
        break;
      case 'opt2':
        this.debito = true;

        this.tipPag = 'Debito';
        break;

      default:
        break;
    }
  }

  // metodo para mostrar parcelas
  selecionaParcela() {
    const num = this.totalPedidoNum;
    if (this.totalPedidoNum >= 50) {
      let count = 0;

      for (let i = 0; i < this.opcoesParcelamento.length; i++) {
        count++;
        let calc = num / count;

        this.parcelas.push(count + ' X de ' + calc.toFixed(2));
      }
    } else {
      let calc = this.totalPedidoNum.toFixed(2);
      this.parcelas.push(calc);
    }
  }

  // seleciona a quantidade de parcelas
  selecionaNumParcelas(o: Event, p: any) {
    let t = Number(o);
    this.parcela = p[t];

    switch (t) {
      case t:
        this.parcelaSelecionada = true;
        break;

      default:
        break;
    }
  }

  consultaCep(valor: any, form: any) {
    this.cepService
      .buscar(valor)
      .subscribe((dados: any) => this.populaForm(dados, form));

    this.cepValor = true;
  }

  populaForm(dados: any, form: any) {
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf,
    });

    this.cep = dados.cep;
    this.logradouro = dados.logradouro;
    this.bairro = dados.bairro;
    this.cidade = dados.localidade;
    this.uf = dados.uf;
    this.UFPreenchida = true;
  }

  finalizaPedido() {
    if (
      this.numCard == '' ||
      this.venc == '' ||
      this.cvc == '' ||
      this.parcelaSelecionada == false ||
      this.cepValor == false
    ) {
      alert('Preecha todos os campos para prosseguir!!');
    } else {
      alert('Pedido Finalizado!!!');
      this.pedidos
        .setPedidos(
          this.metPag,
          this.tipPag,
          this.parcela,
          this.totalPedido,
          this.user,
          'aberto',
          this.data,
          this.hora,
          this.cep,
          this.logradouro,
          this.bairro,
          this.cidade,
          this.uf
        )
        .subscribe();
    }
  }

  finalizaPedidoPix() {
    if (!this.parcela) {
      this.parcela = '';
    }

    this.pedidos
      .setPedidos(
        this.metPag,
        this.tipPag,
        this.parcela,
        this.totalPedido,
        this.user,
        'aberto',
        this.data,
        this.hora,
        this.cep,
        this.logradouro,
        this.bairro,
        this.cidade,
        this.uf
      )
      .subscribe();

    alert('pedido fechado krai!!');
  }
}
