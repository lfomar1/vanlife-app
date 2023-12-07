import "./App.css";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import HostLayout from "./components/HostLayout";
import VanDetail from "./pages/Vans/VanDetail";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import HostVans from "./pages/Host/HostVans";
import HostVansCard from "./pages/Host/Vans/HostVansCard";
import HostVansPricing from "./pages/Host/Vans/HostVansPricing";
import HostVansPhotos from "./pages/Host/Vans/HostVansPhotos";
import HostVansDetails from "./pages/Host/Vans/HostVansDetails";
import Dashboard from "./pages/Host/Dashboard";
import Error404 from "./pages/Error404";
import Error from "./components/Error";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" loader={vansLoader} element={<Vans />}></Route>
        <Route path="vans/:id" element={<VanDetail />}></Route>
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVansCard />}>
            <Route index element={<HostVansDetails />} />
            <Route path="pricing" element={<HostVansPricing />} />
            <Route path="photos" element={<HostVansPhotos />} />
          </Route>
        </Route>
        <Route path="*" element=<Error404 /> />
      </Route>
    )
  );
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
