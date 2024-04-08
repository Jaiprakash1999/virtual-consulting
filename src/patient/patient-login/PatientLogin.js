import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientLogin = ({ setPatientRegister }) => {
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState({
    userName: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/patientDashboard");
  };
  return (
    <div className="bg-white border m-4 shadow rounded">
      <div className="flex p-2 justify-between text-lg">
        <h1>Welcome to Parchaa virtual consulting !</h1>
      </div>
      <hr></hr>
      <form onSubmit={handleSubmit} className="p-2">
        <div className="my-2">
          <label>Mobile Number / Email ID</label>
          <input
            type="text"
            name="userName"
            value={patientData.name}
            placeholder=""
            onChange={handleInputChange}
            className="w-full p-1.5 border rounded-md mt-1 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="my-2">
          <label>Password</label>
          <input
            type="text"
            name="name"
            className="w-full p-1.5 border rounded-md mt-1 focus:outline-none focus:border-indigo-500"
            value={patientData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-2">
          <input type="checkbox" className="mr-2" />
          <label>Login with OTP instead of password</label>
        </div>

        <button
          className="p-2 w-full flex justify-center bg-red-400 rounded"
          type="submit"
        >
          Login
        </button>

        <div className="flex my-2 justify-between font-light">
          <div className="">Don't have an account?</div>
          <button
            type="button"
            className="underline  hover:text-yellow-500 ml-2"
            onClick={() => setPatientRegister(true)}
          >
            Create One
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientLogin;
