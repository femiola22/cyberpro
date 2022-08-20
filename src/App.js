import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Body from "./pages/Body";
import Devices from "./pages/Devices";
import Footer from "./pages/Footer";
import Dictionary from "./pages/Dictionary";
import Devicesinselectedgroup from "./pages/Devicesinselectedgroup";
import Accordion from "./pages/Accordion";

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Body />} />
            <Route path="/" element={<Body />}></Route>
            <Route path="/home" element={<Body />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/devices/accordion" element={<Accordion />} />
            <Route
              path="/devices/selected/:id"
              element={<Devicesinselectedgroup />}
            />
            <Route path="/devices/:id" element={<Accordion />} />
            {/* <Route path="/editStaff/:id" element={<UpdateStaff />} /> */}
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
