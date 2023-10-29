import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarcompraComponent } from './listarcompra.component';

describe('ListarcompraComponent', () => {
  let component: ListarcompraComponent;
  let fixture: ComponentFixture<ListarcompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarcompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
