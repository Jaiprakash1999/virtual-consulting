import axios from "axios";
import { useCallback, useEffect, useState } from "react";
const { REACT_APP_API_KEY } = process.env;

const useGetPatientDashboard = () => {
  const [specialityData, setSpecialityData] = useState([]);
  const [symptomsData, setSymtomsData] = useState([]);

  const getAllSpeciality = useCallback(async () => {
    console.log("Cookies speciality:", document.cookie);
    const token = localStorage.getItem("authToken");
    try {
      const res = await axios.get(
        `${REACT_APP_API_KEY}/api/speciality-symptoms/findAllSpeciality`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        // { withCredentials: true }
      );
      setSpecialityData(res.data);
    } catch (error) {
      console.log(error, "err");
    }
  }, []);

  const getAllSymptoms = useCallback(async () => {
    try {
      const res = await axios.get(
        `${REACT_APP_API_KEY}/api/speciality-symptoms/findAllSymptom`
      );
      setSymtomsData(res.data);
    } catch (error) {
      console.log(error, "error");
    }
  }, []);

  useEffect(() => {
    getAllSymptoms();
  }, [getAllSymptoms]);

  useEffect(() => {
    getAllSpeciality();
  }, [getAllSpeciality]);

  return {
    specialityData,
    symptomsData,
  };
};

export default useGetPatientDashboard;
