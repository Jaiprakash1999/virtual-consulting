import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import useGetAllDoctors from "./hook/useGetAllDoctors";

const DoctorList = () => {
  const navigate = useNavigate();

  const { doctorList = [] } = useGetAllDoctors();

  const { doctors = [] } = doctorList?.[0] || {};
  const handleBack = () => {
    navigate("/patientDashboard");
  };

  const handleTimeSlots = (id) => {
    navigate("/doctorTimeSlot", { state: { id: id } });
  };

  return (
    <div>
      <div className="flex px-4 py-3 -mt-1 fixed w-full  bg-white shadow justify-between">
        <button onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1>Consult with verified, top doctors</h1>
      </div>
      <div className="pt-12">
        {(doctors || []).map((doctor) => {
          const {
            name = "Saumaya",
            yearOfExperience = 2,
            qualification = "MBBS",
            totalConsults,
            rating,
            specialities = "No",
            id,
          } = doctor || {};
          return (
            <div
              key={id}
              className="bg-white m-4 rounded-xl shadow border p-2 my-2"
              onClick={() => handleTimeSlots(doctor.id)}
            >
              <div className="flex items-center">
                {/* <FontAwesomeIcon icon={doctor.doctorPhoto} /> */}
                <FontAwesomeIcon icon={faUser} />
                <div className="ms-2">Dr. {name}</div>
              </div>
              <div>
                <label className="text-gray-700 me-1">
                  Years of Experience :
                </label>
                {yearOfExperience}
              </div>
              <div>
                <label className="text-gray-700">Qualification : </label>
                {qualification}
              </div>
              <div>
                <label className="text-gray-700 me-1">Specialities : </label>{" "}
                {specialities}
              </div>
              <div>
                <label className="text-gray-700 me-1">
                  Online consultation completed :
                </label>
                {totalConsults}
              </div>
              <div>
                <label className="text-gray-700 me-1">Rating :</label>
                {rating}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoctorList;
