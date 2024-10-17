import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const { REACT_APP_API_KEY } = process.env;

const usePatientLogin = ({ patientData }) => {
  const navigate = useNavigate();

  const getPatientLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", patientData.userName);
    formData.append("password", patientData.password);

    try {
      const res = await axios.post(`${REACT_APP_API_KEY}/api/patient/login`, {
        username: patientData.userName,
        password: patientData.password,
      });
      console.log(res.data, "res login");
      const token = res.data;
      localStorage.setItem("authToken", token);
      console.log("Cookies login:", document.cookie);
      navigate("/patientDashboard");
    } catch (error) {
      console.error(error, "error");
    }
  };

  const getPatientLogOut = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${REACT_APP_API_KEY}/api/patient/logout`);
      console.log(res.data);
      toast.success(res.data);
    } catch (error) {
      console.log(error, "error");
      toast.error(error);
    }
  };

  return {
    getPatientLogin,
    getPatientLogOut,
  };
};

export default usePatientLogin;
