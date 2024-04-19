import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGetScheduleAdoctor from "./hook/useGetScheduleAdoctor";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import useBookedAppointmentForPatient from "./hook/useBookedAppointmentForPatient";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DoctorTimeSlot = () => {
  const navigate = useNavigate();
  const { timeSlot, handleBack, id: sechduleId } = useGetScheduleAdoctor();

  const handleWriteConcern = (id) => {
    navigate("/writeConcern", {
      state: { bookId: id, sechduleId: sechduleId },
    });
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex px-4 py-3 -mt-1 fixed w-full  bg-white shadow justify-between">
        <button onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1>Please select a time slot</h1>
      </div>
      <div className="pt-12">
        {timeSlot.map((dateTime) => {
          const { timeSlots, id, date } = dateTime || {};
          return (
            <div
              key={id}
              style={{ boxShadow: "0 0 8px rgb(44 62 80 / 20%)" }}
              className="bg-white pb-2 shadow m-3 rounded"
            >
              <div className="bg-green-500 p-1.5 flex"> {date}</div>
              <div className="flex flex-wrap justify-between">
                {timeSlots.map((time) => {
                  const { startTime, endTime, id, availabilityStatus } =
                    time || {};
                  return (
                    <div
                      className={
                        availabilityStatus
                          ? "flex py-1.5 px-6 mx-3.5 my-2 w-fit rounded bg-green-500"
                          : "flex py-1.5 px-6 mx-3.5 my-2 w-fit rounded bg-red-500"
                      }
                    >
                      <button
                        disabled={!availabilityStatus}
                        onClick={() => handleWriteConcern(id)}
                      >
                        {startTime} to {endTime}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoctorTimeSlot;
