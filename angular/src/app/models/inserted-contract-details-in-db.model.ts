export class InsertedContractDetailsInDbModel {

  contractDetailsID: number;
  contractID: number;
  validFrom: Date;
  validTo: Date;
  roomTypeID: number;
  numberOfRooms: number;
  maxAdults: number;
  price: number;

  constructor(Id: number, cId: number, from: Date, to: Date, rmType: number, rooms: number, adults: number, price: number) {
    this.contractDetailsID = Id;
    this.contractID = cId;
    this.validFrom = from;
    this.validTo = to;
    this.roomTypeID = rmType;
    this.numberOfRooms = rooms;
    this.maxAdults = adults;
    this.price = price;
  }
}
