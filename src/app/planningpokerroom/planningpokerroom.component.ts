import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

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

  constructor(
    private pokercardsService: PokercardsService,
    private membersService: MembersService
  ) {
    this.pokercards = pokercardsService.pokercards;
    this.pokercards[0].setState(Pokercard.STOPPED);
    this.members = membersService.findByRoom();
  }

  ngOnInit() {
  }


  moveLeft() {
    const selected = this.getIndexByState(Pokercard.STOPPED);
    if (selected < this.pokercards.length - 1) {
      this.pokercards[selected].setState(Pokercard.GOING_LEFT);
      this.pokercards[selected + 1].state = Pokercard.COMING_LEFT;
    }
  }

  moveRight() {
    const selected = this.getIndexByState(Pokercard.STOPPED);
    if (selected > 0) {
      this.pokercards[selected].setState(Pokercard.GOING_RIGHT);
      this.pokercards[selected - 1].state = Pokercard.COMING_RIGHT;
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

  membersMove(direction) {
    const that = this;
    setTimeout(function () {
      console.log(that.membersMovePosition);
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

}
