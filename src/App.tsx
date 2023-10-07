import { Container } from "components/Container";
import { TheHeader } from "./components/TheHeader/TheHeader";
import { Search } from "components/Search";
import { UserCard } from "./components/UserCard/UserCard";
import { defaultUser } from "mock/index";

function App() {
  return (
    <Container>
      <TheHeader />
      <Search hasError onSubmit={() => {}} />
      <UserCard {...defaultUser} />
    </Container>
  );
}

export default App;
