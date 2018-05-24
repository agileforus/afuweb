import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';

import { PokercardsService } from '../pokercards.service';
import { Pokercard } from '../pokercard';

import { MembersService } from '../members.service';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-planningpokerroom',
  templateUrl: './planningpokerroom.component.html',
  styleUrls: ['./planningpokerroom.component.css'],
  providers: [ PokercardsService, MembersService ],
  animations: [
    trigger('cardMove', [
      state(Pokercard.STOPPED, style({
        display: 'block',
        transform: 'translateX(0)'
      })),
      state(Pokercard.HIDDEN, style({
        display: 'none',
        transform: 'translateX(-100%)'
      })),
      state(Pokercard.GOING_LEFT, style({
        display: 'none',
        transform: 'translateX(-100%)'
      })),
      state(Pokercard.COMING_LEFT, style({
        display: 'block',
        transform: 'translateX(-100%)'
      })),
      state(Pokercard.GOING_RIGHT, style({
        display: 'none',
        transform: 'translateX(0)'
      })),
      state(Pokercard.COMING_RIGHT, style({
        display: 'block',
        transform: 'translateX(0)'
      })),
      transition(`${Pokercard.STOPPED} => ${Pokercard.GOING_LEFT}`, [
        style({transform: 'translateX(0)'}),
        animate('100ms')
      ]),
      transition(`${Pokercard.HIDDEN} => ${Pokercard.COMING_LEFT}`, [
        style({transform: 'translateX(0)'}),
        animate('100ms')
      ]),
      transition(`${Pokercard.STOPPED} => ${Pokercard.GOING_RIGHT}`, [
        style({transform: 'translateX(-100%)'}),
        animate('100ms')
      ]),
      transition(`${Pokercard.HIDDEN} => ${Pokercard.COMING_RIGHT}`, [
        style({transform: 'translateX(-100%)'}),
        animate('100ms')
      ])
    ]),
    trigger('cardFlip', [
      state(Pokercard.FLIP_STOPPED, style({
        display: 'block',
      })),
      state(Pokercard.FLIP_OUT, style({
        display: 'none',
        transform: 'rotate3d(0, 1, 0, 90deg)'
      })),
      state(Pokercard.FLIP_IN, style({
        display: 'block'
      })),
      state(Pokercard.FLIP_COVER_HIDDEN, style({
        display: 'none',
      })),
      state(Pokercard.FLIP_COVER_IN, style({
        display: 'block',
      })),
      state(Pokercard.FLIP_COVER_OUT, style({
        display: 'none',
        transform: 'rotate3d(0, 1, 0, -90deg)'
      })),
      transition(`${Pokercard.FLIP_STOPPED} => ${Pokercard.FLIP_OUT}`, [
        style({}),
        animate('300ms ease-out')
      ]),
      transition(`${Pokercard.FLIP_OUT} => ${Pokercard.FLIP_IN}`, [
        style({
          display: 'block',
          transform: 'rotate3d(0, 1, 0, 90deg)'
        }),
        animate('300ms ease-in')
      ]),
      transition(`${Pokercard.FLIP_COVER_HIDDEN} => ${Pokercard.FLIP_COVER_IN}`, [
        style({
          display: 'block',
          transform: 'rotate3d(0, 1, 0, -90deg)'
        }),
        animate('300ms ease-in')
      ]),
      transition(`${Pokercard.FLIP_COVER_IN} => ${Pokercard.FLIP_COVER_OUT}`, [
        style({
          display: 'none',
        }),
        animate('300ms ease-out')
      ]),
    ])
  ]
})
export class PlanningpokerroomComponent implements OnInit {

  @ViewChild('membersMain')
  membersMain: ElementRef;

  @ViewChild('membersScroll')
  membersScroll: ElementRef;

  pokercards = [];
  members = [];
  membersMoveState = 'stopped';
  membersMovePosition = 0;
  cover = Pokercard.FLIP_COVER_HIDDEN;
  coverInfo = '';
  mobile = false;

  constructor(
    private deviceService: DeviceDetectorService,
    private pokercardsService: PokercardsService,
    private membersService: MembersService
  ) {
    this.pokercards = pokercardsService.pokercards;
    this.pokercards[0].setState(Pokercard.STOPPED);
    this.pokercards[0].setFlip(Pokercard.FLIP_STOPPED);
    this.members = membersService.findByRoom();

    if (!this.deviceService.isDesktop()) {
      this.mobile = true;
    }
  }

  ngOnInit() {
  }

  moveLeft() {
    if (this.cover !== Pokercard.FLIP_COVER_HIDDEN) {
      return;
    }
    const selected = this.getIndexByState(Pokercard.STOPPED);
    if (selected < this.pokercards.length - 1) {
      this.pokercards[selected].setState(Pokercard.GOING_LEFT);
      this.pokercards[selected + 1].setState(Pokercard.COMING_LEFT);
    }
  }

  moveRight() {
    if (this.cover !== Pokercard.FLIP_COVER_HIDDEN) {
      return;
    }
    const selected = this.getIndexByState(Pokercard.STOPPED);
    if (selected > 0) {
      this.pokercards[selected].setState(Pokercard.GOING_RIGHT);
      this.pokercards[selected - 1].setState(Pokercard.COMING_RIGHT);
    }
  }

  moveEnd() {
    let selected = this.getIndexByState(Pokercard.COMING_LEFT);
    if (selected !== null) {
      this.pokercards[selected].state = Pokercard.STOPPED;
    }
    selected = this.getIndexByState(Pokercard.COMING_RIGHT);
    if (selected !== null) {
      this.pokercards[selected].state = Pokercard.STOPPED;
    }
    selected = this.getIndexByState(Pokercard.GOING_LEFT);
    if (selected !== null) {
      this.pokercards[selected].state = Pokercard.HIDDEN;
    }
    selected = this.getIndexByState(Pokercard.GOING_RIGHT);
    if (selected !== null) {
      this.pokercards[selected].state = Pokercard.HIDDEN;
    }
  }

  flipIn() {
    const selected = this.getIndexByState(Pokercard.STOPPED);
    if (selected !== null) {
      this.coverInfo = this.pokercards[selected].name;
      this.pokercards[selected].setFlip(Pokercard.FLIP_OUT);
    }
  }

  flipOut() {
    this.cover = Pokercard.FLIP_COVER_OUT;
  }

  flipEnd() {
    let selected = this.getIndexByFlip(Pokercard.FLIP_OUT);
    if (selected !== null && this.cover === Pokercard.FLIP_COVER_HIDDEN) {
      this.cover = Pokercard.FLIP_COVER_IN;
      return;
    }
    selected = this.getIndexByFlip(Pokercard.FLIP_OUT);
    if (selected !== null && this.cover === Pokercard.FLIP_COVER_OUT) {
      this.pokercards[selected].setFlip(Pokercard.FLIP_IN);
      return;
    }
    selected = this.getIndexByFlip(Pokercard.FLIP_IN);
    if (selected !== null && this.cover === Pokercard.FLIP_COVER_OUT) {
      this.cover = Pokercard.FLIP_COVER_HIDDEN;
      this.pokercards[selected].setFlip(Pokercard.FLIP_STOPPED);
      return;
    }
  }

  private membersMove(direction) {
    const that = this;
    setTimeout(function () {
      const size = that.membersScroll.nativeElement.scrollWidth - that.membersMain.nativeElement.offsetWidth;
      if (direction < 0) {
        if ((that.membersMovePosition * direction) < size) {
          that.membersMovePosition -= 10;
          that.membersScroll.nativeElement.style = 'left: ' + that.membersMovePosition + 'px';
        }
      } else {
        if (that.membersMovePosition < 0) {
          that.membersMovePosition += 10;
          that.membersScroll.nativeElement.style = 'left: ' + that.membersMovePosition + 'px';
        }
      }
      if (that.membersMoveState === 'move') {
        that.membersMove(direction);
      }
    }, 1000 / 60);
  }

  membersMoveLeft() {
    this.membersMoveState = 'move';
    this.membersMove(-1);
  }

  membersMoveRight() {
    this.membersMoveState = 'move';
    this.membersMove(1);
  }

  membersMoveStop() {
    this.membersMoveState = 'stopped';
  }

  private getIndexByState(st: string) {
    let selected = null;
    let index = 0;
    for (const pc of this.pokercards) {
      if (pc.state === st) {
        selected = index;
      }
      index++;
    }
    return selected;
  }

  private getIndexByFlip(flip: string) {
    let selected = null;
    let index = 0;
    for (const pc of this.pokercards) {
      if (pc.flip === flip) {
        selected = index;
      }
      index++;
    }
    return selected;
  }

}
