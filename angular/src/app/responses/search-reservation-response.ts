import {ReservationComposer} from '../entities/reservation-composer';

export class SearchReservationResponse {
  availableReservations: ReservationComposer[];
  reservationsAvailability: string;
  numberOfAvailableReservations: number;
}
