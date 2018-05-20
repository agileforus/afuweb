import { TestBed, inject } from '@angular/core/testing';

import { MembersService } from './members.service';
import {Member} from './member';

describe('MembersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembersService]
    });
  });

  it('should be created', inject([MembersService], (service: MembersService) => {
    expect(service).toBeTruthy();
  }));
  it('should be return list of members from room', inject([MembersService], (service: MembersService) => {
    expect(service.findByRoom()).toBeTruthy();
    expect(service.findByRoom()).toContain(new Member('marcus.floriano@gmail.com', 'avatar-01.svg'));
    expect(service.findByRoom()[0].avatar).toBe('avatar-01.svg');
  }));
});
