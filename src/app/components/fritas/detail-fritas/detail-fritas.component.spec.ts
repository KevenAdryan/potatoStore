import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFritasComponent } from './detail-fritas.component';

describe('DetailFritasComponent', () => {
  let component: DetailFritasComponent;
  let fixture: ComponentFixture<DetailFritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFritasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
