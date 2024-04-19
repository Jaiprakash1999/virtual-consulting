import axios from "axios";
const { REACT_APP_API_KEY } = process.env;

const usePatientRegister = ({
  patientData,
  setPatientRegister = () => {},
  setDoctorRegister = () => {},
}) => {
  const getPatientRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${REACT_APP_API_KEY}/api/patient/register`,
        patientData
      );
      const data = await response.data;

      setPatientRegister(false);
      setDoctorRegister(false);
      console.log(data);
    } catch (error) {
      console.log(error, "err");
    }
  };

  return {
    getPatientRegister,
  };
};

export default usePatientRegister;
