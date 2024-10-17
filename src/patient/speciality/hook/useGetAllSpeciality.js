import axios from "axios";
import { useCallback, useEffect, useState } from "react";
const { REACT_APP_API_KEY } = process.env;

const useGetAllSpeciality = () => {
  const [specialityData, setSpecialityData] = useState([]);
  const [isSpecialityLoading, setIsSpecialityLoading] = useState(true);

  const getAllSpeciality = useCallback(async () => {
    const token = localStorage.getItem("authToken");
    try {
      const res = await axios.get(
        `${REACT_APP_API_KEY}/api/speciality-symptoms/findAllSpeciality`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSpecialityData(res.data);
      setIsSpecialityLoading(false);
    } catch (error) {
      console.error(error, "error");
    }
  }, []);
  useEffect(() => {
    getAllSpeciality();
  }, [getAllSpeciality]);

  return {
    specialityData,
    isSpecialityLoading,
  };
};

export default useGetAllSpeciality;
