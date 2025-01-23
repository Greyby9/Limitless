import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCartaoComponent } from './produto-cartao.component';

describe('ProdutoCartaoComponent', () => {
  let component: ProdutoCartaoComponent;
  let fixture: ComponentFixture<ProdutoCartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoCartaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
