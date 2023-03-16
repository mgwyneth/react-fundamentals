import { useState, useEffect } from 'react';

const useFetchPerson = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await response.json();
        setUser(user);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  return { isLoading, isError, user };
};
export default useFetchPerson;
