import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requstconfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requstconfig.url, {
        method: requstconfig.method ? requstconfig.method : "GET",
        headers: requstconfig.headers ? requstconfig.headers : {},
        body: requstconfig.body ? JSON.stringify(requstconfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
