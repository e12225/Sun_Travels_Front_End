export class RoomTypeModel {
  roomTypeID: number;
  roomTypeName: string;

  constructor(Id: number, name: string) {
    this.roomTypeID = Id;
    this.roomTypeName = name;
  }
}
