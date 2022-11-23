import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class TransfereService {
  constructor() {}

  data: any;
  data2: any;

  public setData(data: any) {
    this.data = data;
  }

  public getData(): Observable<any> {
    return this.data;
  }

  public setData2(data: any) {
    this.data2 = data;
  }

  public getData2(): Observable<any> {
    return this.data2;
  }
}
