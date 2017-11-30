export class ReservationSearchModel {
  checkInDate: Date;
  numberOfNights: number;
  numberOfRooms: number;
  // noOfAdultsPerRoom: number[];
  // noOfAdultsPerRoom: number;
  noOfAdultsPerRoom: string;

  constructor(checkIn: Date, nights: number, rooms: number, adults: string) {
    this.checkInDate = checkIn;
    this.numberOfNights = nights;
    this.numberOfRooms = rooms;
    this.noOfAdultsPerRoom = adults;
  }
}
