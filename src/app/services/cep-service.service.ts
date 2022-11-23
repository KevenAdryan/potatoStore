import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  constructor(private httpclient: HttpClient) { }

  buscar(cep:String){
    return this.httpclient.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
