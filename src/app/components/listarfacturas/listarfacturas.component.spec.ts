import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarfacturasComponent } from './listarfacturas.component';

describe('ListarfacturasComponent', () => {
  let component: ListarfacturasComponent;
  let fixture: ComponentFixture<ListarfacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarfacturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarfacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
