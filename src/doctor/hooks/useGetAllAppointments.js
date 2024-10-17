import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const { REACT_APP_API_KEY } = process.env;

const useGetAllAppointments = () => {
  const [allAppointments, setAllApointments] = useState();
  const [isAppointmentsLoading, setIsAppointmentsLoading] = useState(true);
  const [doctorProfile, setDoctorProfile] = useState({});
  const navigate = useNavigate();

  const getAllAppointments = useCallback(async () => {
    const token = localStorage.getItem("authToken");
    try {
      const res = await axios.get(
        `${REACT_APP_API_KEY}/api/appointment/doctor/allAppointments`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        // { withCredentials: true }
      );
      setAllApointments(res.data);
      setIsAppointmentsLoading(false);
    } catch (error) {
      console.log(error, "error");
      setIsAppointmentsLoading(false);
    }
  }, []);

  const getDoctorProfile = useCallback(async () => {
    try {
      const token = localStorage.getItem("authToken");
      const res = await axios.get(
        `${REACT_APP_API_KEY}/api/doctor/getProfile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        // { withCredentials: true }
      );
      setDoctorProfile(res.data);
    } catch (error) {
      console.log(error, "error");
    }
  }, []);

  useEffect(() => {
    getAllAppointments();
  }, [getAllAppointments]);

  useEffect(() => {
    getDoctorProfile();
  }, [getDoctorProfile]);

  const handleBack = () => {
    navigate("/doctorDashboard");
  };

  return { allAppointments, isAppointmentsLoading, handleBack, doctorProfile };
};

export default useGetAllAppointments;
