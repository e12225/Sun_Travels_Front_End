export class ContractDetailsModel {
  contractDetailsID: number;
  contractID: number;
  validFrom: Date;
  validTo: Date;
  roomType: String;
  numberOfRooms: number;
  maxAdults: number;
  price: number;

  constructor(Id: number, ctrID: number, from: Date, to: Date, rmType: string, rooms: number, adults: number, price: number) {
    this.contractDetailsID = Id;
    this.contractID = ctrID;
    this.validFrom = from;
    this.validTo = to;
    this.roomType = rmType;
    this.numberOfRooms = rooms;
    this.maxAdults = adults;
    this.price = price;
  }
}
