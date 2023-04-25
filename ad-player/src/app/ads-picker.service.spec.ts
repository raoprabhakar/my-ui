import { TestBed } from '@angular/core/testing';

import { AdsPickerService } from './ads-picker.service';

describe('AdsPickerService', () => {
  let service: AdsPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
