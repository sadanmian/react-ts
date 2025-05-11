import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
