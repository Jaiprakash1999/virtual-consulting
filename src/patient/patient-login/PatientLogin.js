import React, { useState } from "react";
import usePatientLogin from "./hook/usePatientLogin";

const PatientLogin = ({
  setPatientRegister,
  setDoctorLogin,
  setDoctorRegister,
}) => {
  const [patientData, setPatientData] = useState({
    userName: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };
  const { getPatientLogin } = usePatientLogin({
    patientData,
    setPatientData,
  });

  return (
    <div className="bg-white border m-4  shadow rounded">
      {/* <div className="flex p-2 justify-between text-lg">
        <h1>Welcome to Parchaa virtual consulting !</h1>
      </div>
      <hr></hr> */}

      <div className="flex p-2 justify-between text-lg">
        <h1>Are you a Doctor ?</h1>
        <button
          className="underline  hover:text-yellow-500"
          onClick={() => {
            setPatientRegister(false);
            setDoctorRegister(false);
            setDoctorLogin(true);
          }}
        >
          Login here
        </button>
      </div>
      <hr />
      <div className="flex justify-center mt-3">
        <h1>Login as Patient</h1>
      </div>
      <form onSubmit={(e) => getPatientLogin(e)} className="p-6">
        <div className="my-2">
          <label>Mobile Number / Email ID</label>
          <input
            type="text"
            name="userName"
            value={patientData.name}
            placeholder="Enter your mobile number/email"
            onChange={handleInputChange}
            required
            className="w-full p-1.5 border rounded-md mt-1 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="my-2">
          <label>Password</label>
          <input
            type="text"
            name="password"
            required
            className="w-full p-1.5 border rounded-md mt-1 focus:outline-none focus:border-indigo-500"
            value={patientData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
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
