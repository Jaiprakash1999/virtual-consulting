import axios from "axios";
const { REACT_APP_API_KEY } = process.env;

const useCreateDoctor = ({
  doctorData,
  setPatientRegister = () => {},
  setDoctorRegister = () => {},
}) => {
  const createDoctor = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${REACT_APP_API_KEY}/api/doctor/register`, doctorData);
      setPatientRegister(false);
      setDoctorRegister(false);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return { createDoctor };
};

export default useCreateDoctor;
