import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-pokercards',
  templateUrl: './pokercards.component.html',
  styleUrls: ['./pokercards.component.css'],
  animations: [
    trigger('cardzoom', [
      state('inactive', style({
        border: '1px solid yellow',
        transform: 'translateX(0)'
      })),
      state('active', style({
        border: '1px solid red',
        transform: 'translateX(0)'
      })),
      transition('inactive => active', [
        style({
          transform: 'translateX(0)'
        }),
        animate(100)
      ])
    ])
  ]
})
export class PokercardsComponent implements OnInit {

  state = 'inactive';

  cards = [
    {'slug': 'one',         'name': 'Low hanging fruit',        'image': 'pokercard-low-hanging-fruit.svg'},
    {'slug': 'two',         'name': 'Piece of cake',            'image': 'pokercard-piece-of-cake.svg'},
    {'slug': 'tree',        'name': 'It ain\'t rocket science', 'image': 'pokercard-it-aint-rocket-science.svg'},
    {'slug': 'five',        'name': 'Ornitorinco',              'image': 'pokercard-ornitorinco.svg'},
    {'slug': 'eight',       'name': 'An arm and a leg',         'image': 'pokercard-an-arm-and-a-leg.svg'},
    {'slug': 'thirteen',    'name': 'Squeaking by',             'image': 'pokercard-squeaking-by.svg'},
    {'slug': 'twenty',      'name': 'Don\'t put all',           'image': 'pokercard-dont-put-all.svg'},
    {'slug': 'forty',       'name': 'Meterse en un berenjenal', 'image': 'pokercard-meterse-en-un-berenjenal.svg'},
    {'slug': 'onehundred',  'name': 'Monster task',             'image': 'pokercard-monster-task.svg'},
    {'slug': 'infinite',    'name': 'When pigs fly',            'image': 'pokercard-when-pigs-fly.svg'},
    {'slug': 'drangon',     'name': 'Here be dragons',          'image': 'pokercard-here-be-dragons.svg'},
    {'slug': 'yak',         'name': 'Yak shaving',              'image': 'pokercard-yak-shaving.svg'},
    {'slug': 'coffee',      'name': 'Coffee break',             'image': 'pokercard-coffee-break.svg'},
    {'slug': 'brownie',     'name': 'Eat a Brownie',            'image': 'pokercard-eat-a-brownie.svg'}
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}
