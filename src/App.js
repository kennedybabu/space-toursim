import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route , Routes} from 'react-router-dom'
import Destinations from "./pages/Destinations";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
      </Routes>
    </>
  );
}

export default App;
