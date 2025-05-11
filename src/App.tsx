import { List } from "./components/generics/List";

function App() {
  return (
    <div>
      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => {
          console.log(item);
        }}
      />
      <List
        items={[1, 2, 3]}
        onClick={(item) => {
          console.log(item);
        }}
      /> */}
      <List
        items={[{ id: 1, first: "Bruce", last: "Wayne" }]}
        onClick={() => {}}
      />
    </div>
  );
}

export default App;
