import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { TransfereService } from 'src/app/services/transfere-dado.service';

@Component({
  selector: 'app-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(
    public router: Router,
    public app: AppComponent,
    private transfereService: TransfereService,
    private authService: AutenticacaoService
  ) {}

  ngOnInit(): void {}

  login: string = '';
  senha: string = '';

  username: string = '';

  logar() {
    this.authService.autenticar(this.login, this.senha).subscribe((dados) => {
      this.validaLogin(dados);
    });
  }

  validaLogin(dados: any) {
    if (this.login == '' || this.senha == '') {
      alert('login ou senha não preenchidos');
    }

    const busca = dados.find((el: any, idx: any, obj: any) => {
      if (this.login == el.userName && this.senha == el.password) {
        // diz que o usario está logado
        this.app.setUsuLogado(true);
        // passa o nome de usuario pro app component
        this.username = el.userName;
        this.app.pegaUser(this.username);

        localStorage.setItem('user', JSON.stringify(el.userName));
        localStorage.setItem('codFunc', JSON.stringify(el.codFunc));
        localStorage.setItem('codUni', JSON.stringify(el.codUni));

        this.router.navigateByUrl('/');
        return true;
      }
      return false;
    });

    if (!busca && this.senha != '' && this.login != '') {
      alert('login ou senha incorretos!');
    }

    this.login = '';
    this.senha = '';
  }
}
