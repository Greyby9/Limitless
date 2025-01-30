import { Routes } from "@angular/router";


export default [
    {
        path: '',
        loadComponent: () => import('../produto-lista/produto-lista.component')

    },
    {
        path: 'produto/:id',
        loadComponent: () => import('../produto-detalles/produto-detalles.component')
    }
] as unknown as Routes;