import { Component, inject } from '@angular/core';
import { ProdutoSateService } from '../../../shared/data-access/produto-state.service';
import { ProdutoCartaoComponent } from '../../ui/produto-cartao/produto-cartao.component';


@Component({
  selector: 'app-produto-lista',
  standalone: true,
  imports: [ProdutoCartaoComponent],
  templateUrl: './produto-lista.component.html',
  styles: ``,
  providers: [
    ProdutoSateService,
  ]
})
export default class ProdutoListaComponent{
  productsState = inject(ProdutoSateService)

  trocarPage(){
    this.productsState.trocarPage$.next(2),
    console.log('sirve')
  }

}
