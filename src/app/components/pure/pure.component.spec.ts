import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureComponent } from './pure.component';

describe('PureComponent', () => {
  let component: PureComponent;
  let fixture: ComponentFixture<PureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
