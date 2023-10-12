import { TestBed } from '@angular/core/testing';

import { ServiceRealestateService } from './service-realestate.service';

describe('ServiceRealestateService', () => {
  let service: ServiceRealestateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRealestateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
