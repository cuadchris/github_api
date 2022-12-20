import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";

export const User = () => {
  const { user, getUser } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div>{user.login}</div>;
};
