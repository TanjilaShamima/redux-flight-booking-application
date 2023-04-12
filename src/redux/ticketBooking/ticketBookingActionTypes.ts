import { bookingType } from "../../utils/bookingType";

export const ADD_BOOKING = "ticketBooking/addBooking";
export const REMOVE_BOOKING = "ticketBooking/removeBooking";

export type actionType = {
  type: string;
  payload: bookingType;
};

export type rootReducerType = {
  bookingReducer: bookingType[];
};

export type DispatchType = (args: actionType) => actionType;
