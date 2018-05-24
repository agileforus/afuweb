import { Injectable } from '@angular/core';
import {removeSummaryDuplicates} from '@angular/compiler';
import {Member} from './member';
import {log} from 'util';

@Injectable()
export class MembersService {

  avatars = [
    { 'id': 'av01', 'image': 'avatar-01.svg' },
    { 'id': 'av02', 'image': 'avatar-02.svg' },
    { 'id': 'av03', 'image': 'avatar-03.svg' },
    { 'id': 'av04', 'image': 'avatar-04.svg' },
    { 'id': 'av05', 'image': 'avatar-05.svg' },
    { 'id': 'av06', 'image': 'avatar-06.svg' },
    { 'id': 'av07', 'image': 'avatar-07.svg' },
    { 'id': 'av08', 'image': 'avatar-08.svg' },
    { 'id': 'av09', 'image': 'avatar-09.svg' },
    { 'id': 'av10', 'image': 'avatar-10.svg' },
    { 'id': 'av11', 'image': 'avatar-11.svg' },
    { 'id': 'av12', 'image': 'avatar-12.svg' },
    { 'id': 'av13', 'image': 'avatar-13.svg' },
    { 'id': 'av14', 'image': 'avatar-14.svg' },
    { 'id': 'av15', 'image': 'avatar-15.svg' },
    { 'id': 'av16', 'image': 'avatar-16.svg' },
    { 'id': 'av17', 'image': 'avatar-17.svg' },
    { 'id': 'av18', 'image': 'avatar-18.svg' },
    { 'id': 'av19', 'image': 'avatar-19.svg' },
    { 'id': 'av20', 'image': 'avatar-20.svg' },
    { 'id': 'av21', 'image': 'avatar-21.svg' },
    { 'id': 'av22', 'image': 'avatar-22.svg' },
    { 'id': 'av23', 'image': 'avatar-23.svg' },
    { 'id': 'av24', 'image': 'avatar-24.svg' }
  ]

  constructor() { }

  findByRoom() {
    const result = [];
    for (const avatar of this.avatars) {
      result.push(new Member(avatar['id'], 'Marcus Floriano', avatar['image'], 'wait'));
    }
    return result;
  }

}
