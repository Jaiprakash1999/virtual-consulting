import axios from "axios";
import { useCallback, useEffect, useState } from "react";
const { REACT_APP_API_KEY } = process.env;

const useGetPatientProfile = () => {
  const [patientProfile, setPatientProfile] = useState();

  const getPatientProfile = useCallback(async () => {
    const res = await axios.get(`${REACT_APP_API_KEY}/api/patient/getProfile`, {
      withCredentials: true,
    });
    setPatientProfile(res.data);
  }, []);

  useEffect(() => {
    getPatientProfile();
  }, [getPatientProfile]);

  return { patientProfile };
};

export default useGetPatientProfile;
