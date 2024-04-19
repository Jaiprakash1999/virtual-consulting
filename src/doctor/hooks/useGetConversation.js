import axios from "axios";
import { useCallback, useEffect, useState } from "react";
const { REACT_APP_API_KEY } = process.env;

const useGetConversation = ({ conversationId }) => {
  const [conversationMessage, setConversationMessage] = useState({});

  const getAllConversations = useCallback(async () => {
    try {
      const res = await axios.get(
        `${REACT_APP_API_KEY}/api/conversation/${conversationId}`,
        { withCredentials: true }
      );
      setConversationMessage(res.data);
    } catch (error) {
      console.log(error, "error");
    }
  }, [conversationId]);

  useEffect(() => {
    getAllConversations();
  }, [getAllConversations, conversationId]);
  return { conversationMessage };
};

export default useGetConversation;
