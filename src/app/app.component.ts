import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from './dialog/logout-dialog/logout-dialog.component';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger | undefined;

  constructor(public router: Router, public dialog: MatDialog) {
    //Ao recarregar a pagina ele manda pra URL preenchida no this.router
    this.router.events
      .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
      .subscribe((event) => {
        if (event.id === 1 && event.url === event.urlAfterRedirects) {
          localStorage.clear();
          this.router.navigateByUrl('/login');
        }
      });
    //
  }

  ngOnInit(): void {}

  title = 'formAngular';

  lo = '';
  sidenav_opened = false;
  usuariolog = false;
  imagem: string =
    'https://uploaddeimagens.com.br/images/004/029/462/original/batata-logo.png?1663707343';

  setUsuLogado(logado: boolean) {
    this.usuariolog = logado;
  }

  pegaUser(log: string) {
    this.lo = log;
  }

  openDialog() {
    const dialogRef = this.dialog.open(LogoutDialogComponent, {
      restoreFocus: false,
    });
  }
}
