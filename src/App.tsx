import { Container } from "components/Container";
import { TheHeader } from "./components/TheHeader/TheHeader";
import { Search } from "components/Search";
import { UserCard } from "./components/UserCard/UserCard";
import { defaultUser } from "mock/index";
import { useState } from "react";
import { GitHubError, LocalGitHubUser, GitHubUser } from "types";
import { isGitHubUser } from "utils/typeguards";
import { extractLocalUser } from "utils/exract-local-user";

const BASE_URL = "https://api.github.com/users/";

function App() {
  const [user, setUser] = useState<LocalGitHubUser | null>(defaultUser);
  console.log(user);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const res = await fetch(url);
    const user = (await res.json()) as GitHubUser | GitHubError;
    console.log(user);
    console.log(isGitHubUser(user));
    if (isGitHubUser(user)) {
      console.log(user, "setset");
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
