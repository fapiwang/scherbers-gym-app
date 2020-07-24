export class Session {
  public date: string;
  public time: string;
  public place: string;

  constructor(date: string, time: string, place: string) {
    this.date = date;
    this.time = time;
    this.place = place;
  }
}
