import { ADD_BOOKING, REMOVE_BOOKING } from "./ticketBookingActionTypes";
import { bookingType } from "../../utils/bookingType";

export const addBooking = (data: bookingType) => {
  return {
    type: ADD_BOOKING,
    payload: { ...data },
  };
};

export const removeBooking = (data: bookingType) => {
  return {
    type: REMOVE_BOOKING,
    payload: { ...data },
  };
};
