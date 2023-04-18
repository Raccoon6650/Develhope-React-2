import React from "react";
import useGitHubUser from "./useGitHubUser";

const GitHubUserForHook = (props) => {
  const { user, isLoading } = useGitHubUser(props.user);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Name User: {user.name} <br />
      ID: {user.id} <br />
      Url Avatar: {user.avatar_url}
    </div>
  );
};

export default GitHubUserForHook;