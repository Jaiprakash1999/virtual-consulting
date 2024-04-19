import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const { REACT_APP_API_KEY } = process.env;

const useDoctorLogin = ({ doctorData }) => {
  const navigate = useNavigate();

  const getDoctorLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${REACT_APP_API_KEY}/api/doctor/login`, doctorData, {
        withCredentials: true,
      });
      navigate("/doctorDashboard");
    } catch (error) {
      console.log(error, "error");
    }
  };

  const getDoctorLogOut = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${REACT_APP_API_KEY}/api/doctor/logout`);
      console.log(res.data);
      toast.success(res.data);
    } catch (error) {
      console.log(error, "error");
      toast.error(error);
    }
  };

  return { getDoctorLogin, getDoctorLogOut };
};

export default useDoctorLogin;
