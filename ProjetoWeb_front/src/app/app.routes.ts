import { Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { LoginComponent } from './login/login.component';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { CestaComponent } from './cesta/cesta.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { BuscaComponent } from './busca/busca.component';
import { ControleClienteComponent } from './controle-cliente/controle-cliente.component';
import { ControleProdutoComponent } from './controle-produto/controle-produto.component';

export const routes: Routes = [
    {path: "", component:VitrineComponent},
    {path: "vitrine", component:VitrineComponent},
    {path: "login", component:LoginComponent},
    {path: "esqueci", component:EsqueciComponent},
    {path: "detalhe/:codigo", component:DetalheComponent},
    {path: "cesta", component:CestaComponent},
    {path: "cadastro", component:CadastroComponent},
    {path: "busca", component:BuscaComponent},
    {path: "controle-cliente", component:ControleClienteComponent},
    {path: "controle-produto", component:ControleProdutoComponent}
];
