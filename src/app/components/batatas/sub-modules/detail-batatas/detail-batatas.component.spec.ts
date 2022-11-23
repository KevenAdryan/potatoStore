import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBatatasComponent } from './detail-batatas.component';

describe('DetailBatatasComponent', () => {
  let component: DetailBatatasComponent;
  let fixture: ComponentFixture<DetailBatatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBatatasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBatatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
