import React from "react";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

const VideoCall = () => {
  const navigate = useNavigate();
  const myMeeting = async (element) => {
    const roomId = "123";
    const userId = randomID(5); // Generate a unique user ID
    const userName = randomID(5);
    const AppID = 1144359365;
    const ServerSecret = "8ee6f6b6b5fa49b88f2559aa6635d9c7";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      AppID,
      ServerSecret,
      roomId,
      userId,
      userName
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      turnOnMicrophoneWhenJoining: true,
      turnOnCameraWhenJoining: true,
      showMyCameraToggleButton: true,
      showMyMicrophoneToggleButton: true,
      showAudioVideoSettingsButton: true,
      showScreenSharingButton: true,
      showTextChat: true,
      showUserList: true,
      showUserList: true,
      maxUsers: 2,
      layout: "Auto",
      showLayoutButton: false,
      sharedLinks: [
        {
          name: "Copy link",
          url: `http://localhost:3001/videoCall`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };
  const handleBack = () => {
    navigate("/selectedPatient");
  };
  return (
    <div>
      <div className="flex px-4 py-3 -mt-1 fixed w-full  bg-white shadow justify-between">
        <button onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1>Patient Info</h1>
      </div>
      <div className="mx-4 rounded-md h-screen w-fit pt-20" ref={myMeeting} />
    </div>
  );
};

export default VideoCall;
