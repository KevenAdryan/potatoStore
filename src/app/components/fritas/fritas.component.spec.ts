import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FritasComponent } from './fritas.component';

describe('FritasComponent', () => {
  let component: FritasComponent;
  let fixture: ComponentFixture<FritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FritasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
