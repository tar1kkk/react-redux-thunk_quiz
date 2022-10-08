import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AllWords from "./pages/AllWords";
import CreateWord from "./pages/CreateWord";
import Mainpage from "./pages/Mainpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/allwords" element={<AllWords />} />
          <Route path="/createwords" element={<CreateWord />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
