import React from "react";
import "../../App.css";
import { bookingType } from "../../utils/bookingType";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../../redux/ticketBooking/ticketBookingActions";
import { initialBooking } from "../../utils/bookingConstant";
import { rootReducerType } from "../../redux/ticketBooking/ticketBookingActionTypes";

const BookingForm = () => {
  const dispatch = useDispatch();
  const allBookings = useSelector(
    (state: rootReducerType) => state.bookingReducer
  );
  const [bookingData, setBookingData] =
    React.useState<bookingType>(initialBooking);

  const handleSelect = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setBookingData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /**
   * this function is used for adding a new booking
   */

  const addNewBooking = (data: bookingType) => {
    setBookingData(initialBooking);
    if (allBookings.length >= 5) {
      alert("You can't add more than 5 bookings.");
    } else {
      dispatch(addBooking(data));
    }
  };

  return (
    <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
      <form className="first-hero lws-inputform">
        {/* <!-- From --> */}
        <div className="des-from">
          <p>Destination From</p>
          <div className="flex flex-row">
            <img src="./img/icons/Frame.svg" alt="" />
            <select
              className="outline-none px-2 py-2 w-full"
              name="destinationFrom"
              id="lws-from"
              required
              value={bookingData.destinationFrom}
              onChange={handleSelect}
            >
              <option value="" hidden>
                Please Select
              </option>
              <option>Dhaka</option>
              <option>Sylhet</option>
              <option>Saidpur</option>
              <option>Cox's Bazar</option>
            </select>
          </div>
        </div>

        {/* <!-- To --> */}
        <div className="des-from">
          <p>Destination To</p>
          <div className="flex flex-row">
            <img src="./img/icons/Frame.svg" alt="" />
            <select
              className="outline-none px-2 py-2 w-full"
              name="destinationTo"
              id="lws-to"
              required
              value={bookingData.destinationTo}
              onChange={handleSelect}
            >
              <option value="" hidden>
                Please Select
              </option>
              <option>Dhaka</option>
              <option>Sylhet</option>
              <option>Saidpur</option>
              <option>Cox's Bazar</option>
            </select>
          </div>
        </div>

        {/* <!-- Date --> */}
        <div className="des-from">
          <p>Journey Date</p>
          <input
            type="date"
            className="outline-none px-2 py-2 w-full date"
            name="journeyDate"
            id="lws-date"
            required
            value={bookingData.journeyDate.toString()}
            onChange={handleSelect}
          />
        </div>

        {/* <!-- Guests --> */}
        <div className="des-from">
          <p>Guests</p>
          <div className="flex flex-row">
            <img src="./img/icons/Vector (1).svg" alt="" />
            <select
              className="outline-none px-2 py-2 w-full"
              name="guests"
              id="lws-guests"
              required
              value={bookingData.guests}
              onChange={handleSelect}
            >
              <option value="" hidden>
                Please Select
              </option>
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3">3 Persons</option>
              <option value="4">4 Persons</option>
            </select>
          </div>
        </div>

        {/* <!-- Class --> */}
        <div className="des-from !border-r-0">
          <p>Class</p>
          <div className="flex flex-row">
            <img src="./img/icons/Vector (3).svg" alt="" />
            <select
              className="outline-none px-2 py-2 w-full"
              name="ticketClass"
              id="lws-ticketClass"
              required
              value={bookingData.ticketClass}
              onChange={handleSelect}
            >
              <option value="" hidden>
                Please Select
              </option>
              <option>Business</option>
              <option>Economy</option>
            </select>
          </div>
        </div>

        <button
          className="addCity"
          type="button"
          id="lws-addCity"
          onClick={() => addNewBooking(bookingData)}
        >
          <svg
            width="15px"
            height="15px"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span className="text-sm">Book</span>
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
