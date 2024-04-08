import { useState } from "react";
import PatientRegister from "./patient/patient-register/PatientRegister";
import PatientLogin from "./patient/patient-login/PatientLogin";
import DoctorRegister from "./doctor/doctor-register/DoctorRegister";
import VirtualConsultingImage from "../src/images/virtualConsulting.jpg";

function App() {
  const [patientRegister, setPatientRegister] = useState(false);
  const [doctorRegister, setDoctorRegister] = useState(false);
  return (
    <div className="">
      <div className="">
        <img src={VirtualConsultingImage} alt="virtualImage" />
      </div>
      <div>
        {patientRegister && !doctorRegister && (
          <PatientRegister
            setPatientRegister={setPatientRegister}
            setDoctorRegister={setDoctorRegister}
          />
        )}
        {doctorRegister && !patientRegister && (
          <DoctorRegister
            setPatientRegister={setPatientRegister}
            setDoctorRegister={setDoctorRegister}
          />
        )}
        {!patientRegister && !doctorRegister && (
          <PatientLogin
            setPatientRegister={setPatientRegister}
            setDoctorRegister={setDoctorRegister}
          />
        )}
      </div>
    </div>
  );
}
export default App;
