import { TestBed } from '@angular/core/testing';

import { seccionsserviceService } from 'src/app/appprofesor/services/seccionesservice.service';

describe('seccionsserviceService', () => {
  let service: seccionsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(seccionsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
