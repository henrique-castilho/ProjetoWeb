import { Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { LoginComponent } from './login/login.component';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { CestaComponent } from './cesta/cesta.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { BuscaComponent } from './busca/busca.component';

export const routes: Routes = [
    {path: "", component:VitrineComponent},
    {path: "vitrine", component:VitrineComponent},
    {path: "login", component:LoginComponent},
    {path: "esqueci", component:EsqueciComponent},
    {path: "detalhe", component:DetalheComponent},
    {path: "cesta", component:CestaComponent},
    {path: "cadastro", component:CadastroComponent},
    {path: "busca", component:BuscaComponent}
];
