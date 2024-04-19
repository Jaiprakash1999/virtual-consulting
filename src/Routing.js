import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PatientDashboard from "./patient/PatientDashboard";
import App from "./App";

import DoctorList from "./patient/DoctorList";
import DoctorTimeSlot from "./patient/DoctorTimeSlot";
import PatientBookedAppointment from "./patient/PatientBookedAppointment";
import Successfull from "./patient/Successfull";
import DoctorDashboard from "./doctor/DoctorDashboard";
import DoctorAppointments from "./doctor/DoctorAppointments";
import SelectedPatient from "./doctor/SelectedPatient";
import VideoCall from "./doctor/VideoCall";
import CloseAppointment from "./doctor/CloseAppointment";
import WriteConcern from "./patient/WriteConcern";

const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/patientDashboard" element={<PatientDashboard />} />
          <Route path="/doctorList" element={<DoctorList />} />
          <Route path="/doctorTimeSlot" element={<DoctorTimeSlot />} />
          <Route
            path="/bookedAppointments"
            element={<PatientBookedAppointment />}
          />
          <Route path="/successMessage" element={<Successfull />} />
          <Route path="/doctorDashboard" element={<DoctorDashboard />} />
          <Route path="/doctorAppointments" element={<DoctorAppointments />} />
          <Route path="/closeAppointments" element={<CloseAppointment />} />
          <Route path="/selectedPatient" element={<SelectedPatient />} />
          <Route path="/videoCall" element={<VideoCall />} />
          <Route path="/writeConcern" element={<WriteConcern />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
