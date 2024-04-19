import { faTemperature0 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useGetAllSpeciality from "./hook/useGetAllSpeciality";
import { useNavigate } from "react-router-dom";

const Speciality = () => {
  const navigate = useNavigate();
  const { specialityData = [] } = useGetAllSpeciality();
  console.log(specialityData, "specialityData jp");

  const handleDoctorList = (id) => {
    navigate("/doctorList", { state: { id: id, category: "speciality" } });
  };

  return (
    <div className="my-2">
      <div>
        <h1 className="text-lg">Know Your Speciality ?</h1>
        <h1 className="text-gray-600">Select from top specialities</h1>
      </div>
      <div className="flex flex-wrap">
        {specialityData.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center border rounded-md shadow m-2 p-4"
              onClick={() => handleDoctorList(item.id)}
            >
              <FontAwesomeIcon icon={faTemperature0} />
              <h1 className="ms-3">{item.name} </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Speciality;
