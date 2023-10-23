import { TestBed } from '@angular/core/testing';

import { ListacompraService } from './listacompra.service';

describe('ListacompraService', () => {
  let service: ListacompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListacompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
