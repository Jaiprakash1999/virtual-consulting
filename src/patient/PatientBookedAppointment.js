import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ToastContainer } from "react-toastify";
import useGetAllPatientAppointment from "./hook/useGetAllPatientAppointment";
import { useLocation, useNavigate } from "react-router-dom";

const PatientBookedAppointment = () => {
  const states = useLocation();
  const { state } = states || {};
  const { id } = state || {};

  const { patientAppointments = [] } = useGetAllPatientAppointment();
  const navigate = useNavigate();
  const handleRouteToVideoCall = () => {
    navigate("/videoCall");
  };

  const handleBack = () => {
    if (id === "dashboard") {
      navigate("/patientDashboard");
    } else {
      navigate("/doctorTimeSlot", { state: { id: id } });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex px-4 py-3 -mt-1 fixed w-full  bg-white shadow justify-between">
        <button onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1>Your Booked appointments</h1>
      </div>
      <div className="pt-12">
        {patientAppointments.reverse().map((appointment) => {
          const { startTime, endTime, doctor, date } = appointment || {};
          const { name, phoneNo, rating, email, totalConsults, address } =
            doctor || {};
          return (
            <div
              style={{ boxShadow: "0 0 8px rgb(44 62 80 / 20%)" }}
              className="bg-white m-4 pb-1.5 rounded"
            >
              <div className="mx-3.5 pt-2">
                Scheduled At: {date}, {startTime} to {endTime}
              </div>
              <div className="bg-white shadow m-4 rounded">
                <h1 className="bg-red-200 p-1">Doctor details</h1>
                <div className="p-3">
                  <div>
                    <label>Name : </label> {name}
                  </div>
                  <div>
                    <label>Phone no. : </label>
                    {phoneNo}
                  </div>
                  <div>
                    <label>Email : </label>
                    {email}
                  </div>
                  <div>
                    <label>Address : </label>
                    {address}
                  </div>
                  <div>
                    <label>Total Consult : </label> {totalConsults}
                  </div>
                  <div>
                    <label>Rating : </label> {rating}
                  </div>
                  <div
                    onClick={handleRouteToVideoCall}
                    className="flex justify-center text-blue-700 underline cursor-pointer"
                  >
                    <h1>Join video call</h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PatientBookedAppointment;
