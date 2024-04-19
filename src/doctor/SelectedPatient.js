import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import useCloseAppointments from "./hooks/useCloseAppointments";
import { ToastContainer } from "react-toastify";
import useGetConversation from "./hooks/useGetConversation";

const SelectedPatient = () => {
  const states = useLocation();
  const { state } = states || {};
  const { appointments } = state || {};
  const { patient, id, conversation = {} } = appointments || {};
  const { name, phoneNo } = patient || {};
  const { id: conversationId } = conversation || {};

  const { conversationMessage } = useGetConversation({ conversationId });
  const { messages } = conversationMessage || {};
  const { content } = messages?.[0] || {};
  const parts = content?.split("\n");
  const concern = parts?.[parts?.length - 1]?.trim();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/doctorAppointments");
  };
  const handleVideoCall = () => {
    navigate("/videoCall");
  };

  const { closeAppointments } = useCloseAppointments();

  return (
    <div>
      <ToastContainer />
      <div className="flex px-4 py-3 -mt-1 fixed w-full  bg-white shadow justify-between">
        <button onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1>Patient Info</h1>
      </div>
      <div className="pt-10">
        <div className="m-4 shadow p-2 rounded">
          <div className="flex justify-between">
            Name: <div>{name}</div>
          </div>
          <div className="flex justify-between">
            Age:
            <div> 24</div>
          </div>
          <div className="flex justify-between">
            Gender : <div>Male</div>
          </div>
          <div className="flex justify-between">
            Phone No. : <div>{phoneNo}</div>
          </div>
          <div className="flex justify-between">
            <div>{concern}</div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            className="border rounded px-10 py-1"
            onClick={handleVideoCall}
          >
            Video call
          </button>
        </div>
        <div className="flex my-4 justify-center items-center">
          <button
            className="border rounded px-2 py-1"
            onClick={() => closeAppointments(id)}
          >
            Close Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedPatient;
