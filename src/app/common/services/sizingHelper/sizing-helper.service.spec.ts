import { TestBed } from '@angular/core/testing';

import { SizingHelperService } from './sizing-helper.service';

describe('SizingHelperService', () => {
  let service: SizingHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SizingHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
