import { inject, Injectable } from "@angular/core";
import { produto } from "../Interfaces/produto.interface";
import {signalSlice} from "ngxtension/signal-slice";
import { produtoService } from "../../Produto/data-access/produto.service";
import { catchError, map, of, startWith, Subject, switchMap } from "rxjs";

interface State{
    produtos: produto[];
    estado:  'loading' | 'success' | 'error';
    pagina: number;
}
@Injectable()
export class ProdutoSateService {

    private produtoService = inject(produtoService);

    private initialState: State = {
        produtos: [],
        estado: 'loading' as const,
        pagina: 1,
      }; 
      
      trocarPage$ = new Subject<number>();

      cargarProduto$ = this.trocarPage$.pipe(
        startWith(1),
        switchMap((pagina) => this.produtoService.getProduto(pagina)),
        map((produtos) => ({produtos, estado: 'success' as const})),
        catchError(() => {
          return of({
            produtos: [],
            status: 'error' as const,
          });
        })
      );
      
 

      state = signalSlice({
        initialState: this.initialState,
        sources: [
            this.trocarPage$.pipe(map((pagina) => ({pagina, estado: 'loading' as const})),
          ),
           this.cargarProduto$
        ]
      });

}
