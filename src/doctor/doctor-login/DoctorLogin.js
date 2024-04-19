import React, { useState } from "react";
import useDoctorLogin from "./hooks/useDoctorLogin";

const DoctorLogin = ({
  setPatientRegister,
  setDoctorRegister,
  setDoctorLogin,
}) => {
  const [doctorData, setPatientData] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setPatientData({ ...doctorData, [name]: value });
  };
  const { getDoctorLogin } = useDoctorLogin({ doctorData });
  return (
    <div className="bg-white border m-4 shadow rounded">
      {/* <div className="flex p-2 justify-between text-lg">
        <h1>Welcome to Parchaa virtual consulting !</h1>
      </div>
      <hr></hr> */}

      <div className="flex p-2 justify-between text-lg">
        <h1>Are you a Patient?</h1>
        <button
          className="underline  hover:text-yellow-500"
          onClick={() => {
            setPatientRegister(false);
            setDoctorRegister(false);
            setDoctorLogin(false);
          }}
        >
          Login here
        </button>
      </div>
      <hr></hr>
      <div className="flex justify-center pt-3">
        <h1>Login as doctor</h1>
      </div>
      <form onSubmit={(e) => getDoctorLogin(e)} className="p-6">
        <div className="my-2">
          <label>Mobile Number / Email ID</label>
          <input
            type="text"
            name="username"
            value={doctorData.username}
            placeholder="Enter your mobile/email"
            onChange={handleInputChange}
            className="w-full p-1.5 border rounded-md mt-1 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="my-2">
          <label>Password</label>
          <input
            type="text"
            name="password"
            className="w-full p-1.5 border rounded-md mt-1 focus:outline-none focus:border-indigo-500"
            value={doctorData.password}
            onChange={handleInputChange}
            placeholder="Enter your password "
          />
        </div>
        <div className="my-2">
          <input type="checkbox" className="mr-2" />
          <label>Login with OTP instead of password</label>
        </div>
        <div className="flex justify-center bg-red-400 rounded">
          <button className="p-2">Login</button>
        </div>
        <div className="flex my-2 justify-between font-light">
          <div className="">Don't have an account?</div>
          <button
            className="underline  hover:text-yellow-500 ml-2"
            onClick={() => {
              setDoctorRegister(true);
              setPatientRegister(false);
              setDoctorLogin(false);
            }}
          >
            Create One
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorLogin;
