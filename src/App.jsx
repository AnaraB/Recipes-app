import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import Favoritepage from "./pages/Favoritepage";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<Favoritepage />} />
      </Routes>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
