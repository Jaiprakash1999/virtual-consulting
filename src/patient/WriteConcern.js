import React, { useState } from "react";
import useBookedAppointmentForPatient from "./hook/useBookedAppointmentForPatient";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const WriteConcern = () => {
  const navigate = useNavigate();
  const states = useLocation();
  const { state } = states || {};
  const { bookId, sechduleId } = state || {};
  const [cencern, setConcern] = useState("");

  const { bookAppointment } = useBookedAppointmentForPatient({
    sechduleId,
    cencern,
    setConcern,
  });
  const handleBack = () => {
    navigate("/doctorTimeSlot", { state: { id: sechduleId } });
  };

  return (
    <div>
      <div className="flex px-4 py-3 -mt-1 fixed w-full  bg-white shadow justify-between">
        <button onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1>Write your concern </h1>
      </div>
      <div className="pt-20 flex items-center justify-center flex-col">
        <form onSubmit={(e) => bookAppointment(e, bookId)}>
          <textarea
            className="border focus:outline-none focus:border-indigo-500 border-indigo-500 h-20 p-2 rounded w-11/12"
            value={cencern}
            required
            onChange={(e) => setConcern(e.target.value)}
          />

          <button
            type="submit"
            className="border py-1.5 px-4 w-11/12 my-4 border-indigo-600 text-gray-600 rounded-md"
          >
            Book appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default WriteConcern;
