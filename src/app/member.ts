export class Member {
  constructor(public id: string, public name: string, public avatar: string, public status) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.status = status;
  }
}
