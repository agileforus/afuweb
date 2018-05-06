export class Pokercard {

  static HIDDEN = 'hidden';
  static STOPPED = 'stopped';
  static GOING_LEFT = 'going-left';
  static COMING_LEFT = 'coming-left';
  static GOING_RIGHT = 'going-right';
  static COMING_RIGHT = 'coming-right';

  constructor(public slug: string, public name: string, public image: string, public state = Pokercard.HIDDEN) {
  }

  setState(state: string) {
    this.state = state;
  }

}
