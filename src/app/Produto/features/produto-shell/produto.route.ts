import { Routes } from "@angular/router";
import ProdutoListaComponent from "../produto-lista/produto-lista.component";

export default [
    {
        path: '',
        loadComponent: () => import('../produto-lista/produto-lista.component')

    }
] as unknown as Routes;