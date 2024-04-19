import axios from "axios";
import { useCallback, useEffect, useState } from "react";
const { REACT_APP_API_KEY } = process.env;

const useGetAllSymptoms = () => {
  const [symptomsData, setSymtomsData] = useState();
  const [isSymptomsLoading, setIsSymptomsLoading] = useState(true);

  const getAllSymptoms = useCallback(async () => {
    try {
      const res = await axios.get(
        `${REACT_APP_API_KEY}/api/speciality-symptoms/findAllSymptom`,
        {
          withCredentials: true,
        }
      );
      setSymtomsData(res.data);
      setIsSymptomsLoading(false);
    } catch (error) {
      console.log(error, "error");
    }
  }, []);

  useEffect(() => {
    getAllSymptoms();
  }, [getAllSymptoms]);

  return {
    symptomsData,
    isSymptomsLoading,
  };
};

export default useGetAllSymptoms;
