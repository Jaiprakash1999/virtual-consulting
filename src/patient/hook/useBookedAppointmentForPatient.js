import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { REACT_APP_API_KEY } = process.env;

const useBookedAppointmentForPatient = ({
  sechduleId,
  cencern,
  setConcern,
}) => {
  const navigate = useNavigate();
  // const states = useLocation();
  // const { state } = states || {};
  // const { id } = state || {};

  const bookAppointment = async (e, id) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${REACT_APP_API_KEY}/api/appointment/patient/create`,
        { timeSlotId: id, concern: cencern },
        { withCredentials: true }
      );
      console.log(res, "res");
      setConcern("");
      navigate("/successMessage", { state: { id: sechduleId } });
    } catch (error) {
      console.log(error, "error");
    }
  };

  return {
    bookAppointment,
  };
};

export default useBookedAppointmentForPatient;
