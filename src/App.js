import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";

import Home from "./Home";
import Postdetails from "./Components/Postdetails";


function App() {
 
  return (

    <BrowserRouter>

      <Routes>
          <Route path="/" element={<Home/>}/>
      </Routes>

      <Routes>
          <Route path="/postdetails/:id" element={<Postdetails/>}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
