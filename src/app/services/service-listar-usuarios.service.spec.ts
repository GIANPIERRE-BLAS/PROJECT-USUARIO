import { TestBed } from '@angular/core/testing';

import { ServiceListarUsuariosService } from './service-listar-usuarios.service';

describe('ServiceListarUsuariosService', () => {
  let service: ServiceListarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceListarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
