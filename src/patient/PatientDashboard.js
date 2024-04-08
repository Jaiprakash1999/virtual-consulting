import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperature0 } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  const navigate = useNavigate();
  const handleDoctorList = () => {
    navigate("/doctorList");
  };

  return (
    <div className="m-4">
      <div className="flex justify-center my-2">
        <h1>Welcome Jai</h1>
      </div>
      <div className=" rounded-md justify-center bg-red-100 p-2">
        <h1>
          Skip the travel! <br></br>
          Consult a doctor online
        </h1>
      </div>
      <div className="my-2">
        <label>Search Symptom/Speciality</label>
        <input
          type="search"
          placeholder="Eg. Cold,cough,fever"
          className="w-full p-1.5 border border-gray-500 rounded-2xl mt-1 focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div>
        <h1 className="text-lg">Know Your Speciality ?</h1>
        <h1 className="text-gray-600">Select from top specialities</h1>
      </div>
      <div className="flex mt-4 w-full justify-between">
        <div
          className="flex items-center border rounded-md shadow w-5/12  p-4"
          onClick={handleDoctorList}
        >
          <FontAwesomeIcon icon={faTemperature0} />
          <h1 className="ms-3">Coronavirus</h1>
        </div>
        <div
          onClick={handleDoctorList}
          className="flex items-center border rounded-md shadow w-5/12 p-4"
        >
          <FontAwesomeIcon icon={faTemperature0} />
          <h1 className="ms-3"> Dermatology</h1>
        </div>
      </div>

      <div className="flex my-4 w-full justify-between">
        <div
          onClick={handleDoctorList}
          className="flex items-center border rounded-md shadow w-5/12  p-4"
        >
          <FontAwesomeIcon icon={faTemperature0} />
          <h1 className="ms-3">Physician</h1>
        </div>
        <div
          onClick={handleDoctorList}
          className="flex items-center border rounded-md shadow w-5/12 p-4"
        >
          <FontAwesomeIcon icon={faTemperature0} />
          <h1 className="ms-3"> Physiotheripst</h1>
        </div>
      </div>

      <div>
        <h1 className="text-lg">Know Your Symptom ?</h1>
        <h1 className="text-gray-600">Select from top Symptoms</h1>
      </div>
      <div className="flex mt-4 w-full justify-between">
        <div
          onClick={handleDoctorList}
          className="flex items-center border rounded-md shadow w-5/12  p-4"
        >
          <FontAwesomeIcon icon={faTemperature0} />
          <h1 className="ms-3">Fever</h1>
        </div>
        <div
          onClick={handleDoctorList}
          className="flex items-center border rounded-md shadow w-5/12 p-4"
        >
          <FontAwesomeIcon icon={faTemperature0} />
          <h1 className="ms-3"> Constipation</h1>
        </div>
      </div>

      <div className="flex my-4 w-full justify-between">
        <div
          onClick={handleDoctorList}
          className="flex items-center border rounded-md shadow w-5/12  p-4"
        >
          <FontAwesomeIcon icon={faTemperature0} />
          <h1 className="ms-3">Hair loss</h1>
        </div>
        <div
          onClick={handleDoctorList}
          className="flex items-center border rounded-md shadow w-5/12 p-4"
        >
          <FontAwesomeIcon icon={faTemperature0} />
          <h1 className="ms-3"> Coughing</h1>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
