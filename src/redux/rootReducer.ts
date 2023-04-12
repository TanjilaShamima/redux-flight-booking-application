import {combineReducers} from 'redux';
import ticketBookingReducer from './ticketBooking/ticketBookingReducer';

const rootReducer = combineReducers({
    bookingReducer: ticketBookingReducer
})

export default rootReducer;