import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: "Sadan",
    last: "Mian",
  };

  const nameList = [
    { first: "Sadan", last: "Mian" },
    { first: "Abdul", last: "Razzaq" },
    { first: "Salva", last: "Majid" },
  ];
  return (
    <div>
      <Greet name="Sadan Mian" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
