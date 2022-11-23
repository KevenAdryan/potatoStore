import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoPedidoService {
  constructor(private httpClient: HttpClient) {}

  getPedidos(): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/produto-pedido/`);
  }

  setPedidos(prod: any) {
    return this.httpClient.post('http://localhost:3000/produto-pedido', {
      produto: prod,
      status: 'provisorio',
      total: '1',
    });
  }

  deletePedido(id: any) {
    return this.httpClient.delete(`http://localhost:3000/produto-pedido/${id}`);
  }

  patchPedido(id: any, totpednum: any) {
    return this.httpClient.patch(`http://localhost:3000/produto-pedido/${id}`, {
      status: 'aberto',
      total: totpednum,
    });
  }
}
