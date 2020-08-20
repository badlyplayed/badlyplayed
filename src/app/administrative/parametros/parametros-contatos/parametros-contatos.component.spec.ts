import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosContatosComponent } from './parametros-contatos.component';

describe('ParametrosContatosComponent', () => {
  let component: ParametrosContatosComponent;
  let fixture: ComponentFixture<ParametrosContatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosContatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
