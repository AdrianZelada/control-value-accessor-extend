import { TestBed } from '@angular/core/testing';

import { ValidationsCharacterService } from './validations-character.service';

describe('ValidationsCharacterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationsCharacterService = TestBed.get(ValidationsCharacterService);
    expect(service).toBeTruthy();
  });
});
