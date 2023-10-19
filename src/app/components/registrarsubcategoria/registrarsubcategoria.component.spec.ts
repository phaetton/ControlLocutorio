import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarsubcategoriaComponent } from './registrarsubcategoria.component';

describe('RegistrarsubcategoriaComponent', () => {
  let component: RegistrarsubcategoriaComponent;
  let fixture: ComponentFixture<RegistrarsubcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarsubcategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarsubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
