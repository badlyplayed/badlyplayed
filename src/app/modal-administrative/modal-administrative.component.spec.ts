import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdministrativeComponent } from './modal-administrative.component';

describe('ModalAdministrativeComponent', () => {
  let component: ModalAdministrativeComponent;
  let fixture: ComponentFixture<ModalAdministrativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAdministrativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAdministrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
