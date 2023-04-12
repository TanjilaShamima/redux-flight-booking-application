import "../../App.css";
import PreviewBookingRow from "./PreviewBookingRow";
import { useSelector } from "react-redux";
import { rootReducerType } from "../../redux/ticketBooking/ticketBookingActionTypes";

const PreviewBooking = () => {
  const PreviewBookings = useSelector(
    (state: rootReducerType) => state.bookingReducer
  );

  return (
    <table className="booking-table">
      <thead className="bg-gray-100/50">
        <tr className="text-black text-left">
          <th>Destination From</th>
          <th>Destination To</th>
          <th className="text-center">Journey Date</th>
          <th className="text-center">Guests</th>
          <th className="text-center">Class</th>
          <th className="text-center">Delete</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
        {/* <!-- Row --> */}
        {PreviewBookings.length > 0 &&
          PreviewBookings.map((booking, index) => {
            return (
              <tr key={index} className="lws-bookedTable text-black">
                <PreviewBookingRow booking={booking} />
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default PreviewBooking;
