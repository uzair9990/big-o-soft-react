import React from "react";

const useFetch = (URL) => {
  const [json, setJson] = React.useState(null);
  const [error, setError] = React.useState(null);

  const fetchHelper = async () => {
    try {
      const response = await fetch(URL);
      const json = await response.json();
      setJson(json);
    } catch (error) {
      setError("AN ERROR OCCURRED WHILE FETCHING DATA:", error);
    }
  };

  React.useEffect(() => {
    const abortController = new AbortController();
    fetchHelper();

    return () => {
      abortController.abort();
    };
  }, []);

  return [error, json];
};

export default useFetch;
