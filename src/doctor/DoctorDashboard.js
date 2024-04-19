import React from "react";
import useGetAllAppointments from "./hooks/useGetAllAppointments";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const DoctorDashboard = () => {
  const { allAppointments = [], doctorProfile } = useGetAllAppointments();
  const navigate = useNavigate();
  const { name } = doctorProfile || {};
  const length = allAppointments.length;

  const handleMyAppointments = () => {
    navigate("/doctorAppointments");
  };

  console.log(doctorProfile, "doctorProfile");
  return (
    <div className="m-4">
      <div className="flex items-center justify-between">
        <div className="w-fit">Welcome Dr. {name}</div>
        <div>
          <FontAwesomeIcon icon={faBell} />
        </div>
      </div>
      <div
        style={{ boxShadow: "0 0 8px rgb(0 0 0 / 25%)" }}
        className="m-auto w-fit my-3 shadow p-3 rounded"
        onClick={handleMyAppointments}
      >
        My Appointments ({length})
      </div>
    </div>
  );
};

export default DoctorDashboard;
