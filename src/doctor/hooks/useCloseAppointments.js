import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const { REACT_APP_API_KEY } = process.env;

const useCloseAppointments = () => {
  const navigate = useNavigate();
  const closeAppointments = async (id) => {
    try {
      const token = localStorage.getItem("authToken");
      const res = await axios.patch(
        `${REACT_APP_API_KEY}/api/appointment/closeAppointment/${id}`,
        {}, // Ensure an empty object is passed as the second parameter if no data is needed for the request body
        // { withCredentials: true }
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data, "close");
      toast.success("Appointment close successfully !");
      navigate("/closeAppointments");
    } catch (error) {
      console.log(error, "error");
    }
  };
  return { closeAppointments };
};

export default useCloseAppointments;
