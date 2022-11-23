import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SementesComponent } from './sementes.component';

describe('SementesComponent', () => {
  let component: SementesComponent;
  let fixture: ComponentFixture<SementesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SementesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SementesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
