import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/layout/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">
        <NavBar />

        <main>Content</main>
      </div>
    </BrowserRouter>
  );
}

export default App;
