import { useState } from "react";

import appClasses from "../App.module.css";
import BackBtn from "../components/BackBtn";
import Error, { ErrorVariant } from "../components/Error";
import Loader from "../components/Loader";
import Search from "../components/Search";
import User from "../components/User";
import { UserProps } from "../types/user";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<ErrorVariant | null>(null);
  const [isLoading, setLoading] = useState(false);

  const loadUser = async (userName: string) => {
    setLoading(true);
    setError(null);
    setUser(null);

    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const headers: HeadersInit = token ? { Authorization: `Bearer ${token}` } : {};

    try {
      const res = await fetch(`https://api.github.com/users/${userName}`, { headers });

      if (res.status === 404) {
        setError("not-found");
        return;
      }

      if (!res.ok) {
        setError("api");
        return;
      }

      const data = await res.json();
      const { avatar_url, login, name, bio, html_url, location, followers, following, public_repos } = data;

      const userData: UserProps = {
        avatar_url,
        login,
        name,
        bio,
        html_url,
        location,
        followers,
        following,
        public_repos,
      };

      setUser(userData);
    } catch {
      setError("network");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={appClasses.home}>
      <BackBtn fallbackTo="/" />
      <Search loadUser={loadUser} />
      {isLoading && <Loader />}
      {user && <User {...user} />}
      {error && <Error variant={error} />}
    </div>
  );
};

export default Home;
