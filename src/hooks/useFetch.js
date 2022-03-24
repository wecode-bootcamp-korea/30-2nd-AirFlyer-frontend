import { useEffect, useState } from 'react';

export const useFetch = (url, token) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let response;
      try {
        setLoadingError(null);
        setIsLoading(true);
        token
          ? (response = await fetch(url, {
              headers: {
                Authorization: token,
              },
            }))
          : (response = await fetch(url));
        const json = await response.json();
        setData(json);
      } catch (error) {
        setLoadingError(error);
        return;
      } finally {
        setIsLoading(false);
      }
    };
    url && fetchData();
  }, []);

  return { isLoading, data, loadingError };
};
