import { useState, useEffect } from "react";

const useGitHubUser = (username) => {
  const [user, setUser] = useState({ name: "Loading" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getUser() {
      setIsLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUser(data);
      setIsLoading(false);
    }
    getUser();
  }, [username]);

  return { user, isLoading };
};

export default useGitHubUser;