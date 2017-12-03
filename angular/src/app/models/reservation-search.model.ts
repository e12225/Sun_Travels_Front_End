export class ReservationSearchModel {
  checkInDate: Date;
  numberOfNights: number;
  numberOfRooms: number;
  totalAdults: number;
  requestedMaxAdultsPerRoom: number;

  constructor(checkIn: Date, nights: number, rooms: number, adults: number, maxAdultsPerRm: number) {
    this.checkInDate = checkIn;
    this.numberOfNights = nights;
    this.numberOfRooms = rooms;
    this.totalAdults = adults;
    this.requestedMaxAdultsPerRoom = maxAdultsPerRm;
  }
}
