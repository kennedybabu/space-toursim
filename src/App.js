import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route , Routes} from 'react-router-dom'
import Destinations from "./pages/Destinations";
import Europa from "./pages/Europa";
import Mars from "./pages/Mars";
import Titan from "./pages/Titan";
import Crew from "./pages/crew/Crew";
import Pilot from "./pages/crew/Pilot";
import Specialist from "./pages/crew/Specialist";
import Engineer from "./pages/crew/Engineer";
import Technologies from "./pages/techs/Technologies";
import Spaceport from "./pages/techs/Spaceport";
import Capsule from "./pages/techs/Capsule";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/europa' element={<Europa />} />
        <Route path='/mars' element={<Mars />} />
        <Route path='/titan' element={<Titan />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/pilot' element={<Pilot />} />
        <Route path='/specialist' element={<Specialist />} />
        <Route path='/engineer' element={<Engineer />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/spaceport' element={<Spaceport />} />
        <Route path='/capsule' element={<Capsule />} />
      </Routes>
    </>
  );
}

export default App;
