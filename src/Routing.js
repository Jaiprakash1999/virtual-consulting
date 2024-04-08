import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PatientDashboard from "./patient/PatientDashboard";
import App from "./App";
import SymptomDoctorList from "./doctor/SymptomDoctorList";

const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/patientDashboard" element={<PatientDashboard />} />
          <Route path="/doctorList" element={<SymptomDoctorList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
