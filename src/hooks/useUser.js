import { useCallback, useEffect, useState } from "react";
import { httpGetUser, httpUpdateUser } from "./requests";

function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUser = useCallback(async () => {
    const fetchedUser = await httpGetUser();

    return setUser(fetchedUser);
  }, []);

  const chageTheme = useCallback(async (id) => {
    const { darkTheme } = await httpGetUser();

    const themeCred = {
      darkTheme: !darkTheme,
    };
    try {
      await httpUpdateUser(id, themeCred);

      document.location = "/";
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getUser();
    setLoading(false);
  }, [getUser]);

  return {
    user,
    loading,
    chageTheme,
  };
}

export default useUser;
