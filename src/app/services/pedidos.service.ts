import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  constructor(private httpClient: HttpClient) {}

  getPedidos(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/pedidos');
  }

  setPedidos(
    met: string,
    tip: string,
    par: string,
    val: string,
    user: string,
    status: string,
    data: string,
    hora: string,
    cep: string,
    log: string,
    bai: string,
    cid: string,
    uf: string
  ) {
    return this.httpClient.post('http://localhost:3000/pedidos', {
      metPag: met,
      tipPag: tip,
      parcela: par,
      valor: val,
      userName: user,
      status: status,
      data: data,
      hora: hora,
      cep: cep,
      logradouro: log,
      bairro: bai,
      cidade: cid,
      uf: uf,
    });
  }
}
