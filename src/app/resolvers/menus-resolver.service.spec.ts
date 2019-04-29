import { TestBed } from '@angular/core/testing';

import { MenusResolverService } from './menus-resolver.service';

describe('MenusResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenusResolverService = TestBed.get(MenusResolverService);
    expect(service).toBeTruthy();
  });
});
