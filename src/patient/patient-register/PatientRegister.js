import React, { useState } from "react";

const PatientRegister = ({
  setPatientRegister = () => {},
  setDoctorRegister = () => {},
}) => {
  const [patientData, setPatientData] = useState({
    fullName: "",
    mobileNumber: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white border m-4 shadow rounded">
      <div className="flex p-2 justify-between text-lg">
        {/* <h1>Join Parchaa virtual consulting !</h1> */}
        <h1>Are you a doctor?</h1>
        <button
          className="underline  hover:text-yellow-500"
          onClick={() => {
            setDoctorRegister(true);
            setPatientRegister(false);
          }}
        >
          Register here
        </button>
      </div>
      <hr></hr>
      <form onSubmit={handleSubmit} className="p-2">
        <div className="my-2 w-full">
          <label className="">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={patientData.fullName}
            className="w-full p-1.5 border rounded-md mt-1 focus:outline-none focus:border-indigo-500"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="my-2">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            value={patientData.mobileNumber}
            className="w-full p-1.5 border rounded-md mt-1 focus:outline-none focus:border-indigo-500"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="my-2">
          <label>Create Password</label>
          <input
            type="text"
            name="password"
            className="w-full p-1.5 border rounded-md mt-1 focus:outline-none focus:border-indigo-500"
            value={patientData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex justify-center bg-red-400 rounded">
          <button className="p-2">Register</button>
        </div>
        <div className="flex justify-between my-2 font-light">
          <div className="">Already have an account ?</div>
          <button
            className="underline  hover:text-yellow-500"
            onClick={() => {
              setPatientRegister(false);
              setDoctorRegister(false);
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientRegister;
