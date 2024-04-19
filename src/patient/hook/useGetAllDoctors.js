import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const { REACT_APP_API_KEY } = process.env;

const useGetAllDoctors = () => {
  const states = useLocation();
  const { state = {} } = states || {};
  const { id, category } = state || {};

  const [doctorList, setDoctorList] = useState([]);
  const [isDoctorListLoading, setIsDoctorListLoading] = useState(true);

  const getAllDoctors = useCallback(async () => {
    const doctorsAPI =
      category === "symptom"
        ? "allDoctorsWithSymptom"
        : "allDoctorsWithSpeciality";

    try {
      const res = await axios.get(
        `${REACT_APP_API_KEY}/api/speciality-symptoms/${doctorsAPI}/${id}`,
        { withCredentials: true }
      );

      setDoctorList(res.data);
      setIsDoctorListLoading(false);
    } catch (error) {
      console.log(error, "error");

      setIsDoctorListLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getAllDoctors();
  }, [getAllDoctors, id]);

  return {
    doctorList,
    isDoctorListLoading,
  };
};

export default useGetAllDoctors;
