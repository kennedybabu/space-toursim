import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route , Routes} from 'react-router-dom'
import Destinations from "./pages/Destinations";
import Europa from "./pages/Europa";
import Mars from "./pages/Mars";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/europa' element={<Europa />} />
        <Route path='/mars' element={<Mars />} />
      </Routes>
    </>
  );
}

export default App;
