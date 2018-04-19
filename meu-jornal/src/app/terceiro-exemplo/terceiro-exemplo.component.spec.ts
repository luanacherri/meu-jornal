import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroExemploComponent } from './terceiro-exemplo.component';

describe('TerceiroExemploComponent', () => {
  let component: TerceiroExemploComponent;
  let fixture: ComponentFixture<TerceiroExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiroExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiroExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
