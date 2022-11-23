import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssadaComponent } from './assada.component';

describe('AssadaComponent', () => {
  let component: AssadaComponent;
  let fixture: ComponentFixture<AssadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
