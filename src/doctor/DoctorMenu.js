import {
  faArrowRightFromBracket,
  faBars,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const DoctorMenu = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  return (
    <div className="w-full">
      <div className="p-2">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setShowNavigation((prev) => !prev)}
        />
      </div>
      {showNavigation ? (
        <div className=" w-1/2 bg-white shadow">
          <div>
            <FontAwesomeIcon icon={faUserDoctor} /> Profile
          </div>
          <div>
            <FontAwesomeIcon icon={faArrowRightFromBracket} /> Log Out
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DoctorMenu;
