import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosUsuariosComponent } from './parametros-usuarios.component';

describe('ParametrosUsuariosComponent', () => {
  let component: ParametrosUsuariosComponent;
  let fixture: ComponentFixture<ParametrosUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
