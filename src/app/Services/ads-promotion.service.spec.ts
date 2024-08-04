import { TestBed } from '@angular/core/testing';

import { AdsPromotionService } from './ads-promotion.service';

describe('AdsPromotionService', () => {
  let service: AdsPromotionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsPromotionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
