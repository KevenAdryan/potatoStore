import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssadaComponent } from './components/assada/assada.component';
import { DetailAssadaComponent } from './components/assada/detail-assada/detail-assada.component';
import { BatatasComponent } from './components/batatas/batatas.component';
import { DetailBatatasComponent } from './components/batatas/sub-modules/detail-batatas/detail-batatas.component';
import { CriarPedidoComponent } from './components/criar-pedido/criar-pedido.component';

import { FormComponent } from './components/login/login.component';
import { DetailFritasComponent } from './components/fritas/detail-fritas/detail-fritas.component';
import { FritasComponent } from './components/fritas/fritas.component';
import { DetailProdutosComponent } from './components/home/detail-produtos/detail-produtos.component';
import { HomeComponent } from './components/home/home.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { DetailPureComponent } from './components/pure/detail-pure/detail-pure.component';
import { PureComponent } from './components/pure/pure.component';
import { DetailSementesComponent } from './components/sementes/detail-sementes/detail-sementes.component';
import { SementesComponent } from './components/sementes/sementes.component';

const routes: Routes = [
  { path: 'login', component: FormComponent },
  { path: '', component: HomeComponent },
  { path: 'batatas', component: BatatasComponent },
  { path: 'assada', component: AssadaComponent },
  { path: 'pure', component: PureComponent },
  { path: 'fritas', component: FritasComponent },
  { path: 'sementes', component: SementesComponent },
  { path: 'detail-batata', component: DetailBatatasComponent },
  { path: 'detail-assada', component: DetailAssadaComponent },
  { path: 'detail-pure', component: DetailPureComponent },
  { path: 'detail-fritas', component: DetailFritasComponent },
  { path: 'detail-sementes', component: DetailSementesComponent },
  { path: 'detail-produtos', component: DetailProdutosComponent },
  { path: 'criar-pedido', component: CriarPedidoComponent },
  { path: 'pagamento', component: PagamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
