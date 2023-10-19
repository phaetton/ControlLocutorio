import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarcategoriaComponent } from './registrarcategoria.component';

describe('RegistrarcategoriaComponent', () => {
  let component: RegistrarcategoriaComponent;
  let fixture: ComponentFixture<RegistrarcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarcategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
