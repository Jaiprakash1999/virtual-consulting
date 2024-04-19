import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const { REACT_APP_API_KEY } = process.env;

const useGetScheduleAdoctor = () => {
  const navigate = useNavigate();
  const states = useLocation();
  const { state } = states || {};
  const { id } = state || {};

  const [timeSlot, setTimeSlot] = useState([]);
  const [isTimeSlotLoading, setIsTimeSlotLoading] = useState(true);

  const getScheduleAdoctor = useCallback(async () => {
    try {
      const res = await axios.get(
        `${REACT_APP_API_KEY}/api/schedule/getSchedule/${id}`,
        { withCredentials: true }
      );
      setTimeSlot(res.data);
      setIsTimeSlotLoading(false);
    } catch (error) {
      console.log(error, "error");
      setIsTimeSlotLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getScheduleAdoctor();
  }, [getScheduleAdoctor, id]);

  const handleBack = () => {
    navigate("/doctorList", { state: { id: id } });
  };

  return { timeSlot, isTimeSlotLoading, handleBack, id };
};

export default useGetScheduleAdoctor;
