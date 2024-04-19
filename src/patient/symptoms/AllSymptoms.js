import { faTemperature0 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { useNavigate } from "react-router-dom";
import useGetAllSymptoms from "./hooks/useGetAllSymptoms";

const AllSymptoms = () => {
  const navigate = useNavigate();
  const { symptomsData = [] } = useGetAllSymptoms();

  const handleDoctorList = (id) => {
    navigate("/doctorList", { state: { id: id, category: "symptoms" } });
  };

  return (
    <div>
      <div>
        <h1 className="text-lg">Know Your Symptom ?</h1>
        <h1 className="text-gray-600">Select from top Symptoms</h1>
      </div>
      <div className="flex flex-wrap">
        {symptomsData.map((item) => {
          return (
            <div
              onClick={() => handleDoctorList(item.id)}
              key={item.id}
              className="flex items-center m-2 border rounded-md shadow  p-4"
            >
              <FontAwesomeIcon icon={faTemperature0} />
              <h1 className="ms-3">{item.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSymptoms;
