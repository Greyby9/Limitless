import { Routes } from '@angular/router';

export const routes: Routes = [

{
    path: 'produtos', 
    loadChildren: () =>
         import('./Produto/features/produto-shell/produto.route')
},
{
    path: '**',
    redirectTo: 'produtos',
}


];
