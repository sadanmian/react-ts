import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Status } from "./components/Status";

function App() {
  return (
    <div>
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Sadan</Heading>
      </Oscar>
      <Greet name="Sadan" isLoggedIn={true} />
    </div>
  );
}

export default App;
