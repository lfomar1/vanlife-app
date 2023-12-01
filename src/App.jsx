import "./App.css";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans/Vans";
import HostLayout from "./components/HostLayout";
import VanDetail from "./pages/Vans/VanDetail";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import HostVans from "./pages/Host/HostVans";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Host/Dashboard";
import HostVansDetails from "./pages/Host/HostVansDetails";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />}></Route>
            <Route path="vans/:id" element={<VanDetail />}></Route>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVansDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
