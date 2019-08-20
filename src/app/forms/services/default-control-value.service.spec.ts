import { TestBed } from '@angular/core/testing';

import { DefaultControlValueService } from './default-control-value.service';

describe('DefaultControlValueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefaultControlValueService = TestBed.get(DefaultControlValueService);
    expect(service).toBeTruthy();
  });
});
