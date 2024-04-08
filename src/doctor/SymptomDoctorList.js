import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const SymptomDoctorList = () => {
  const navigate = useNavigate();
  const doctorList = [
    {
      doctorPhoto: faUser,
      fullName: "Jaiprkash",
      specialities: "Physician",
      qualification: "MBBS",
      completedOnlineConsultation: 23,
      yearOfExperience: 2,
    },
    {
      doctorPhoto: faUser,
      fullName: "Jaiprkash",
      specialities: "Physician",
      qualification: "MBBS",
      completedOnlineConsultation: 23,
      yearOfExperience: 12,
    },
    {
      doctorPhoto: faUser,
      fullName: "Jaiprkash",
      specialities: "Physician",
      qualification: "MBBS",
      completedOnlineConsultation: 23,
      yearOfExperience: 2,
    },
    {
      doctorPhoto: faUser,
      fullName: "Jaiprkash",
      specialities: "Physician",
      qualification: "MBBS",
      completedOnlineConsultation: 23,
      yearOfExperience: 2,
    },
    {
      doctorPhoto: faUser,
      fullName: "Jaiprkash",
      specialities: "Physician",
      qualification: "MBBS",
      completedOnlineConsultation: 23,
      yearOfExperience: 2,
    },
    {
      doctorPhoto: faUser,
      fullName: "Jaiprkash",
      specialities: "Physician",
      qualification: "MBBS",
      completedOnlineConsultation: 23,
      yearOfExperience: 2,
    },
    {
      doctorPhoto: faUser,
      fullName: "Jaiprkash",
      specialities: "Physician",
      qualification: "MBBS",
      completedOnlineConsultation: 23,
      yearOfExperience: 2,
    },
  ];

  const handleBack = () => {
    navigate("/patientDashboard");
  };

  const handleBook = () => {
    navigate("/bookConsult");
  };
  return (
    <div className="relative">
      <div className="flex px-4 py-3 -mt-1 fixed w-full  bg-white shadow justify-between">
        <button onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1>Consult with verified, top doctors</h1>
      </div>
      <div className="pt-12">
        {doctorList.map((doctor) => {
          return (
            <div className="bg-white m-4 rounded-xl shadow border p-2 my-2">
              <div className="flex items-center">
                <FontAwesomeIcon icon={doctor.doctorPhoto} />
                <div className="ms-2"> {doctor.fullName}</div>
              </div>
              <div>
                <label className="text-gray-700 me-1">
                  Years of Experience :
                </label>
                {doctor.yearOfExperience}
              </div>
              <div>
                <label className="text-gray-700">Qualification : </label>
                {doctor.qualification}
              </div>
              <div>
                <label className="text-gray-700 me-1">Specialities : </label>{" "}
                {doctor.specialities}
              </div>
              <div>
                <label className="text-gray-700 me-1">
                  Online consultation completed :
                </label>
                {doctor.completedOnlineConsultation}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SymptomDoctorList;
