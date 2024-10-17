import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useGetAllAppointments from "./hooks/useGetAllAppointments";
import { useNavigate } from "react-router-dom";

const DoctorAppointments = () => {
  const navigate = useNavigate();

  const {
    handleBack,
    allAppointments = [],
    // isAppointmentsLoading,
  } = useGetAllAppointments();

  const handleSelectedPatient = (appointments) => {
    navigate("/selectedPatient", { state: { appointments: appointments } });
  };

  return (
    <div>
      <div className="flex px-4 py-3 -mt-1 fixed w-full  bg-white shadow justify-between">
        <button onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1>My Appointments </h1>
      </div>
      {allAppointments?.length > 0 ? (
        <div className="pt-10">
          {allAppointments.map((appointments) => {
            const {
              ongoingAppointment,
              patient,
              id,
              startTime,
              date,
              endTime,
            } = appointments || {};
            const { email, name, phoneNo } = patient || {};
            return (
              <div key={id}>
                {ongoingAppointment ? (
                  <div
                    onClick={() => handleSelectedPatient(appointments)}
                    style={{ boxShadow: "0 0 8px rgb(44 62 80 / 20%)" }}
                    className="bg-white pb-2 shadow m-3 rounded "
                  >
                    <div
                      className={
                        ongoingAppointment
                          ? "bg-green-400 p-1.5 flex justify-between"
                          : "bg-red-500 p-1.5 flex justify-between"
                      }
                    >
                      <div>{date}</div>
                      {startTime} to {endTime}
                    </div>
                    <div className="p-2">
                      <label className="font-semibold ">Patient details</label>
                      <div>
                        <span>Name : {name}</span>
                      </div>
                      <div>
                        <span>Email : {email}</span>
                      </div>
                      <div>
                        <span>Phone Number : {phoneNo}</span>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}

          {allAppointments.map((appointments) => {
            const {
              ongoingAppointment,
              patient,
              id,
              startTime,
              date,
              endTime,
            } = appointments || {};
            const { email, name, phoneNo } = patient || {};
            return (
              <div key={id}>
                {ongoingAppointment ? null : (
                  <div
                    style={{ boxShadow: "0 0 8px rgb(44 62 80 / 20%)" }}
                    className="bg-white pb-2 shadow m-3 rounded "
                  >
                    <div
                      className={!ongoingAppointment && "bg-red-500 p-1.5 flex"}
                    >
                      Appointment time : {startTime} to {endTime} ({date})
                    </div>
                    <div className="p-2">
                      <label className="font-semibold ">Patient details</label>
                      <div>
                        <span>Name : {name}</span>
                      </div>
                      <div>
                        <span>Email : {email}</span>
                      </div>
                      <div>
                        <span>Phone Number : {phoneNo}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="pt-20 flex justify-center">No appointment found</div>
      )}
    </div>
  );
};

export default DoctorAppointments;
