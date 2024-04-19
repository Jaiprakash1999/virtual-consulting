import React from "react";
import { useNavigate } from "react-router-dom";
import Speciality from "./speciality/Speciality";
import AllSymptoms from "./symptoms/AllSymptoms";
import useGetPatientProfile from "./hook/useGetPatientProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import useGetAllPatientAppointment from "./hook/useGetAllPatientAppointment";

const PatientDashboard = () => {
  const navigate = useNavigate();
  const { patientAppointments = [] } = useGetAllPatientAppointment();
  const appointmentLength = patientAppointments.length;

  const { patientProfile } = useGetPatientProfile();
  const { name } = patientProfile || {};

  const handleRoutetoAllAppointments = () => {
    navigate("/bookedAppointments", { state: { id: "dashboard" } });
  };

  return (
    <div className="m-4">
      <div className="flex justify-between my-4">
        <h1>Welcome {name} !</h1>
        <div>
          <FontAwesomeIcon icon={faBell} />
        </div>
      </div>
      <div
        onClick={handleRoutetoAllAppointments}
        className="flex justify-center items-center"
      >
        <div
          className="w-fit py-4 px-8 rounded "
          style={{ boxShadow: "0 0 8px rgb(44 62 80 / 20%)" }}
        >
          My appointment ({appointmentLength})
        </div>
      </div>
      <div className="rounded-md justify-center my-3 bg-red-100 p-2">
        <h1>
          Skip the travel! <br></br>
          Consult a doctor online
        </h1>
      </div>
      <Speciality />
      <AllSymptoms />
    </div>
  );
};

export default PatientDashboard;
