import React, { useState } from "react";

const DoctorRegister = ({ setPatientRegister, setDoctorRegister }) => {
  const [doctorData, setDoctorData] = useState({
    fullName: "",
    mobileNumber: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white border m-4 shadow rounded">
      <div className="flex p-2 justify-between text-lg">
        {/* <h1>Join Parchaa virtual consulting !</h1> */}
        <h1>Are you a Patient?</h1>
        <button
          className="underline  hover:text-yellow-500"
          onClick={() => {
            setPatientRegister(true);
            setDoctorRegister(false);
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
            value={doctorData.fullName}
            className="w-full p-1.5 border rounded-md mt-1 focus:outline-none focus:border-indigo-500"
            onChange={handleInputChange}
          />
        </div>
        <div className="my-2">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            value={doctorData.mobileNumber}
            className="w-full p-1.5 border rounded-md mt-1 focus:outline-none focus:border-indigo-500"
            onChange={handleInputChange}
          />
        </div>
        <div className="my-2">
          <label>Create Password</label>
          <input
            type="text"
            name="password"
            className="w-full p-1.5 border rounded-md mt-1 focus:outline-none focus:border-indigo-500"
            value={doctorData.password}
            onChange={handleInputChange}
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
              setDoctorRegister(false);
              setPatientRegister(false);
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorRegister;
