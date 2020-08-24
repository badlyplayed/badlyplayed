import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriasDetalhesComponent } from './historias-detalhes.component';

describe('HistoriasDetalhesComponent', () => {
  let component: HistoriasDetalhesComponent;
  let fixture: ComponentFixture<HistoriasDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriasDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriasDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
