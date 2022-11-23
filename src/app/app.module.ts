import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BatatasComponent } from './components/batatas/batatas.component';
import { AssadaComponent } from './components/assada/assada.component';
import { PureComponent } from './components/pure/pure.component';
import { FritasComponent } from './components/fritas/fritas.component';
import { SementesComponent } from './components/sementes/sementes.component';
import { DetailBatatasComponent } from './components/batatas/sub-modules/detail-batatas/detail-batatas.component';
import { TransfereService } from './services/transfere-dado.service';
import { DetailAssadaComponent } from './components/assada/detail-assada/detail-assada.component';
import { DetailPureComponent } from './components/pure/detail-pure/detail-pure.component';
import { DetailFritasComponent } from './components/fritas/detail-fritas/detail-fritas.component';
import { DetailSementesComponent } from './components/sementes/detail-sementes/detail-sementes.component';
import { DetailProdutosComponent } from './components/home/detail-produtos/detail-produtos.component';
import { LogoutDialogComponent } from './dialog/logout-dialog/logout-dialog.component';
import { CriarPedidoComponent } from './components/criar-pedido/criar-pedido.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PedidoDialogComponent } from './components/criar-pedido/pedido-dialog/pedido-dialog.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    BatatasComponent,
    AssadaComponent,
    PureComponent,
    FritasComponent,
    SementesComponent,
    DetailBatatasComponent,
    DetailAssadaComponent,
    DetailPureComponent,
    DetailFritasComponent,
    DetailSementesComponent,
    DetailProdutosComponent,
    LogoutDialogComponent,
    CriarPedidoComponent,
    PedidoDialogComponent,
    PagamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatTreeModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [TransfereService],
  bootstrap: [AppComponent],
})
export class AppModule {}
