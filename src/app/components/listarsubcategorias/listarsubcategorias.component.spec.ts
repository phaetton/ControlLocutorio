import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarsubcategoriasComponent } from './listarsubcategorias.component';

describe('ListarsubcategoriasComponent', () => {
  let component: ListarsubcategoriasComponent;
  let fixture: ComponentFixture<ListarsubcategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarsubcategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarsubcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
