import { bookingType } from "../../utils/bookingType";
import {
  ADD_BOOKING,
  REMOVE_BOOKING,
  actionType,
} from "./ticketBookingActionTypes";

const initialState: bookingType[] = [];

const ticketBookingReducer = (
  state: bookingType[] = initialState,
  action: actionType
) => {
  switch (action.type) {
    case ADD_BOOKING: {
      const bookings = [
        ...state,
        { bookingId: `bookings-${state.length + 1}`, ...action.payload },
      ];
      return bookings;
    }

    case REMOVE_BOOKING: {
      const bookings = state.filter(
        (booking) => booking.bookingId !== action.payload.bookingId
      );
      return bookings;
    }

    default:
      return state;
  }
};

export default ticketBookingReducer;
