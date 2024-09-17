import { TestBed } from '@angular/core/testing';

import { FileItemService } from './file-item.service';

describe('FileItemService', () => {
  let service: FileItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
