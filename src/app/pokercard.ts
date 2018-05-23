export class Pokercard {

  static HIDDEN = 'hidden';
  static STOPPED = 'stopped';
  static GOING_LEFT = 'going-left';
  static COMING_LEFT = 'coming-left';
  static GOING_RIGHT = 'going-right';
  static COMING_RIGHT = 'coming-right';

  static FLIP_STOPPED = 'flip-stopped';
  static FLIP_OUT = 'flip-out';
  static FLIP_IN = 'flip-in';

  static FLIP_COVER_HIDDEN = 'flip-cover-hidden';
  static FLIP_COVER_IN = 'flip-cover-in';
  static FLIP_COVER_OUT = 'flip-cover-out';

  constructor(public slug: string,
              public name: string,
              public image: string,
              public state = Pokercard.HIDDEN,
              public flip = Pokercard.FLIP_STOPPED) {}

  setState(state: string) {
    this.state = state;
  }

  setFlip(flip: string) {
    this.flip = flip;
  }

}
