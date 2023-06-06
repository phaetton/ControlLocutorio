import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCierreComponent } from './registrar-cierre.component';

describe('RegistrarCierreComponent', () => {
  let component: RegistrarCierreComponent;
  let fixture: ComponentFixture<RegistrarCierreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarCierreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarCierreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
