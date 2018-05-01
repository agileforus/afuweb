export class Pokercard {
  constructor(public slug: string, public name: string, public image: string, public state = 'inactive') { }
  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}
