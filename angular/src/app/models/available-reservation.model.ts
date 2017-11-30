export class AvailableReservationModel {
  hotelName: string;
  roomType: string;
  markedUpPrice: number;
  roomsAvailability: string;

  constructor(hName: string, rmType: string, muPrice: number, rmsAvailability: string) {
    this.hotelName = hName;
    this.roomType = rmType;
    this.markedUpPrice = muPrice;
    this.roomsAvailability = rmsAvailability;
  }
}
