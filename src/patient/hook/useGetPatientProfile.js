import axios from "axios";
import { useCallback, useEffect, useState } from "react";
const { REACT_APP_API_KEY } = process.env;

const useGetPatientProfile = () => {
  const [patientProfile, setPatientProfile] = useState();

  const getPatientProfile = useCallback(async () => {
    console.log("Cookies profile:", document.cookie);
    const token = localStorage.getItem("authToken");
    try {
      const res = await axios.get(
        `${REACT_APP_API_KEY}/api/patient/getProfile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        // {
        //   withCredentials: true,
        // }
      );
      setPatientProfile(res.data);
    } catch (error) {
      console.log(error, "err");
    }
  }, []);

  useEffect(() => {
    getPatientProfile();
  }, [getPatientProfile]);

  return { patientProfile };
};

export default useGetPatientProfile;
