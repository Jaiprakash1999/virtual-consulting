import { faArrowLeft, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Successfull = () => {
  const navigate = useNavigate();
  const states = useLocation();
  const { state } = states || {};
  const { id } = state || {};

  const handleBack = () => {
    navigate("/doctorTimeSlot", { state: { id: id } });
  };
  const handleViewAppointments = () => {
    navigate("/bookedAppointments", { state: { id: id } });
  };

  return (
    <div>
      <div className="flex px-4 py-3 -mt-1 fixed w-full  bg-white shadow justify-between">
        <button onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1>Confirmation</h1>
      </div>
      <div className="flex items-center pt-20 justify-center">
        <div className="bg-green-400 p-4 rounded w-fit">
          <span className="me-1"> Appointment booked successfully</span>
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
      </div>
      <div className="flex justify-center my-5">
        <button
          onClick={handleViewAppointments}
          className="border px-12 text-lg py-2 shadow rounded"
        >
          View Your Appointments
        </button>
      </div>
    </div>
  );
};

export default Successfull;
