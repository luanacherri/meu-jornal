import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroExemploComponent } from './primeiro-exemplo.component';

describe('PrimeiroExemploComponent', () => {
  let component: PrimeiroExemploComponent;
  let fixture: ComponentFixture<PrimeiroExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiroExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
