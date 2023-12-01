import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Vans from "./pages/Vans/Vans";
import HostLayout from "./components/HostLayout";
import VanDetail from "./pages/Vans/VanDetail";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Host/Dashboard";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route element={<Footer />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vans" element={<Vans />}></Route>
              <Route path="/vans/:id" element={<VanDetail />}></Route>
              <Route path="/host" element={<HostLayout />}>
                <Route path="/host/dashboard" element={<Dashboard />} />
                <Route path="/host/income" element={<Income />} />
                <Route path="/host/reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
