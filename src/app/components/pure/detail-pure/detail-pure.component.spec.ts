import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPureComponent } from './detail-pure.component';

describe('DetailPureComponent', () => {
  let component: DetailPureComponent;
  let fixture: ComponentFixture<DetailPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
