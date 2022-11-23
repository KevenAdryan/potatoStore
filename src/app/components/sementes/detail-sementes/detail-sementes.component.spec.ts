import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSementesComponent } from './detail-sementes.component';

describe('DetailSementesComponent', () => {
  let component: DetailSementesComponent;
  let fixture: ComponentFixture<DetailSementesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSementesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailSementesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
