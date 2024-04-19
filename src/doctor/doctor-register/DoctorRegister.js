import React, { useState } from "react";
import useCreateDoctor from "./hooks/useCreateDoctor";

const DoctorRegister = ({ setPatientRegister, setDoctorRegister }) => {
  const [doctorData, setDoctorData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    address: "Delhi",
  });
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const { createDoctor } = useCreateDoctor({
    doctorData,
    setPatientRegister,
    setDoctorRegister,
  });

  return (
    <div className="bg-white border m-4 shadow rounded">
      <div className="flex p-2 justify-between text-lg">
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
      <div className="flex justify-center items-center pt-3">
        <h1>Register as doctor</h1>
      </div>
      <form onSubmit={(e) => createDoctor(e)} className="px-6">
        <div className="my-2 w-full">
          <label className="">Full Name</label>
          <input
            type="text"
            name="name"
            value={doctorData.name}
            className="w-full p-1.5 border rounded-md mt-1 focus:outline-none focus:border-indigo-500"
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
        </div>
        <div className="my-2">
          <label>Mobile Number</label>
          <input
            type="text"
            name="phoneNo"
            placeholder="Enter your mobile number"
            value={doctorData.phoneNo}
            className="w-full p-1.5 border rounded-md mt-1 focus:outline-none focus:border-indigo-500"
            onChange={handleInputChange}
          />
        </div>
        <div className="my-2">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={doctorData.email}
            className="w-full p-1.5 border rounded-md mt-1 focus:outline-none focus:border-indigo-500"
            onChange={handleInputChange}
          />
        </div>
        <div className="my-2">
          <label>Create Password</label>
          <input
            type="text"
            placeholder="Enter a strong password"
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
