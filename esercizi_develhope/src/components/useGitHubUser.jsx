import { useState, useEffect } from "react";

const useGitHubUser = (username) => {


  const [user, setUser] = useState({ name: "Loading" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function getUser() {
    try {
        setIsLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUser(data);
        setIsLoading(false);
    } catch (er) {
        setError(er)
        console.log(`Errore: ${error}`)
    }
    }
    getUser();
  }, [username]);

  return { user, isLoading };
};

export default useGitHubUser;