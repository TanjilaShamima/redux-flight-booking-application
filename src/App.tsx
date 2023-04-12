import React from "react";
import "./App.css";
import BookingForm from "./components/BookingForm/BookingForm";
import PreviewBooking from "./components/PreviewBooking/PreviewBooking";

function App() {
  return (
    <div>
      <header id="header">
        <div className="container">
          {/* <img src="./img/lws-logo.svg" alt="logo" className="logo" /> */}
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>

      <section>
        {/* <!-- Input Data --> */}
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <BookingForm />
        </div>

        {/* <!-- Preview Data --> */}
        <div className="table-container">
        <PreviewBooking />
        </div>
      </section>
    </div>
  );
}

export default App;
