import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoExemploComponent } from './segundo-exemplo.component';

describe('SegundoExemploComponent', () => {
  let component: SegundoExemploComponent;
  let fixture: ComponentFixture<SegundoExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
