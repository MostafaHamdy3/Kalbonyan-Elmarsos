import { useReducer, useCallback } from "react";

const initState = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  indetifier: null,
};

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return {
        loading: true,
        error: null,
        data: null,
        extra: null,
        indetifier: action.indetifier,
      };
    case "RESPONSE":
      return {
        ...curHttpState,
        loading: false,
        data: action.responseData,
        extra: action.extra,
      };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return initState;
    default:
      throw new Error("Shouldn't be reached!");
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initState);

  const clear = useCallback(() => dispatchHttp({ type: "CLEAR" }));

  const sendRequest = useCallback(
    (url, method, body, reqExtra, reqIndentifier) => {
      dispatchHttp({ type: "SEND", indetifier: reqIndentifier });
      fetch(url, {
        method: method,
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          dispatchHttp({
            type: "RESPONSE",
            responseData: responseData,
            extra: reqExtra,
          });
        })
        .catch((error) => {
          dispatchHttp({
            type: "ERROR",
            errorMessage: "Something went wrong !",
          });
        });
    },
    []
  );

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    reqExtra: httpState.extra,
    reqIndentifier: httpState.indetifier,
    clear: clear,
  };
};

export default useHttp;
