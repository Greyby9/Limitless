import { inject, Injectable } from "@angular/core";
import { produto } from "../Interfaces/produto.interface";
import {signalSlice} from "ngxtension/signal-slice";
import { produtoService } from "../../Produto/data-access/produto.service";
import { map } from "rxjs";

interface State{
    produtos: produto[];
    estado:  'loading' | 'success' | 'error';
}
@Injectable()
export class ProdutoSateService {

    private produtoService = inject(produtoService);

    private initialState: State = {
        produtos: [],
        estado: 'loading' as const,
      };

      state = signalSlice({
        initialState: this.initialState,
        sources: [
            this.produtoService.getProduto().pipe(map((produtos) => ({produtos, estado: 'success' as const})))
        ]
      });

}
