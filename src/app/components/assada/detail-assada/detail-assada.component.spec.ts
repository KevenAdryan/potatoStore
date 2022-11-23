import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAssadaComponent } from './detail-assada.component';

describe('DetailAssadaComponent', () => {
  let component: DetailAssadaComponent;
  let fixture: ComponentFixture<DetailAssadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAssadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAssadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
