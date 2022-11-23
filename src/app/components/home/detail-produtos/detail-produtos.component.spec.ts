import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProdutosComponent } from './detail-produtos.component';

describe('DetailProdutosComponent', () => {
  let component: DetailProdutosComponent;
  let fixture: ComponentFixture<DetailProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
