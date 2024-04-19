import axios from "axios";
import { useCallback, useEffect, useState } from "react";
const { REACT_APP_API_KEY } = process.env;

const useGetAllPatientAppointment = () => {
  const [patientAppointments, setPatientAppointments] = useState([]);

  const getAllPatientAppointments = useCallback(async () => {
    try {
      const res = await axios.get(
        `${REACT_APP_API_KEY}/api/appointment/patient/allAppointments`,
        { withCredentials: true }
      );
      setPatientAppointments(res.data);
    } catch (error) {
      console.log(error, "error");
    }
  }, []);

  useEffect(() => {
    getAllPatientAppointments();
  }, [getAllPatientAppointments]);

  return {
    patientAppointments,
  };
};

export default useGetAllPatientAppointment;
