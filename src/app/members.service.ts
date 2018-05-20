import { Injectable } from '@angular/core';
import {removeSummaryDuplicates} from '@angular/compiler';
import {Member} from './member';
import {log} from 'util';

@Injectable()
export class MembersService {

  avatars = [
    { 'image': 'avatar-01.svg' },
    { 'image': 'avatar-02.svg' },
    { 'image': 'avatar-03.svg' },
    { 'image': 'avatar-04.svg' },
    { 'image': 'avatar-05.svg' },
    { 'image': 'avatar-06.svg' },
    { 'image': 'avatar-07.svg' },
    { 'image': 'avatar-08.svg' },
    { 'image': 'avatar-09.svg' },
    { 'image': 'avatar-10.svg' },
    { 'image': 'avatar-11.svg' },
    { 'image': 'avatar-12.svg' },
    { 'image': 'avatar-13.svg' },
    { 'image': 'avatar-14.svg' },
    { 'image': 'avatar-15.svg' },
    { 'image': 'avatar-16.svg' },
    { 'image': 'avatar-17.svg' },
    { 'image': 'avatar-18.svg' },
    { 'image': 'avatar-19.svg' },
    { 'image': 'avatar-20.svg' },
    { 'image': 'avatar-21.svg' },
    { 'image': 'avatar-22.svg' },
    { 'image': 'avatar-23.svg' },
    { 'image': 'avatar-25.svg' }
  ]

  constructor() { }

  findByRoom() {
    const result = [];
    for (const avatar of this.avatars) {
      result.push(new Member('marcus.floriano@gmail.com', avatar['image']));
    }
    return result;
  }

}
