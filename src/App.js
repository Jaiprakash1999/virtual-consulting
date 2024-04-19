import { useState } from "react";
import PatientRegister from "./patient/patient-register/PatientRegister";
import PatientLogin from "./patient/patient-login/PatientLogin";
import DoctorRegister from "./doctor/doctor-register/DoctorRegister";
import DoctorLogin from "./doctor/doctor-login/DoctorLogin";

function App() {
  const [patientRegister, setPatientRegister] = useState(false);
  const [doctorRegister, setDoctorRegister] = useState(false);
  const [doctorLogin, setDoctorLogin] = useState(false);

  return (
    <div className="">
      <div className="flex justify-center">
        <img
          src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fd3d6901b3eee8fef03e9158a6c7e1ca6.cdn.bubble.io%2Ff1689764109471x430181511902805400%2FImage%252019-07-23%2520at%25204.20%2520PM.jpg?w=96&h=82&auto=compress&dpr=2&fit=max"
          alt="virtualImage"
        />
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
        {!patientRegister && !doctorRegister && !doctorLogin && (
          <PatientLogin
            setPatientRegister={setPatientRegister}
            setDoctorRegister={setDoctorRegister}
            setDoctorLogin={setDoctorLogin}
          />
        )}
        {!patientRegister && !doctorRegister && doctorLogin && (
          <DoctorLogin
            setPatientRegister={setPatientRegister}
            setDoctorRegister={setDoctorRegister}
            setDoctorLogin={setDoctorLogin}
          />
        )}
      </div>
    </div>
  );
}
export default App;
