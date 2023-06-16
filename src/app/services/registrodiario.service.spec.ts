import { TestBed } from '@angular/core/testing';

import { RegistrodiarioService } from './registrodiario.service';

describe('RegistrodiarioService', () => {
  let service: RegistrodiarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrodiarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
