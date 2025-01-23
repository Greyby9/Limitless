import { Component, input } from '@angular/core';
import { produto } from '../../../shared/Interfaces/produto.interface';

@Component({
  selector: 'app-produto-cartao',
  standalone: true,
  imports: [],
  templateUrl: './produto-cartao.component.html',
  styleUrl: './produto-cartao.component.css'
})
export class ProdutoCartaoComponent {
  produto = input.required<produto>();

}
