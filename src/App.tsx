import { Container } from "components/Container";
import { TheHeader } from "./components/TheHeader/TheHeader";
import { Search } from "components/Search";

function App() {
  return (
    <Container>
      <TheHeader />
      <Search hasError onSubmit={()=>{}}/>
    </Container>
  );
}

export default App;
