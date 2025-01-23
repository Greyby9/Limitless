import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDetallesComponent } from './produto-detalles.component';

describe('ProdutoDetallesComponent', () => {
  let component: ProdutoDetallesComponent;
  let fixture: ComponentFixture<ProdutoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
