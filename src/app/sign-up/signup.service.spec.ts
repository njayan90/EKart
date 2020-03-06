import { TestBed } from '@angular/core/testing';

import { SignupService } from './signup.service';
import { HttpClientModule } from '@angular/common/http';

describe('SignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [HttpClientModule]
  }));

  it('should be created', () => {
    const service: SignupService = TestBed.get(SignupService);
    expect(service).toBeTruthy();
  });
});
