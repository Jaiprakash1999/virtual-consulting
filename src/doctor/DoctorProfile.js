import React from "react";
import useGetAllAppointments from "./hooks/useGetAllAppointments";

const DoctorProfile = () => {
  const { doctorProfile } = useGetAllAppointments();
  return <div>{doctorProfile.name}</div>;
};

export default DoctorProfile;
