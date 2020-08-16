import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgumasHistoriasComponent } from './algumas-historias.component';

describe('AlgumasHistoriasComponent', () => {
  let component: AlgumasHistoriasComponent;
  let fixture: ComponentFixture<AlgumasHistoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgumasHistoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgumasHistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
