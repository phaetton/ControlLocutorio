import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaregistrodiarioComponent } from './listaregistrodiario.component';

describe('ListaregistrodiarioComponent', () => {
  let component: ListaregistrodiarioComponent;
  let fixture: ComponentFixture<ListaregistrodiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaregistrodiarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaregistrodiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
