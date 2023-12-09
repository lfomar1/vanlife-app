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
import Login from "./pages/Login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { loader as vansDetailLoader } from "./pages/Vans/VanDetail";
import { loader as hostVansLoader } from "./pages/Host/HostVans";
import { loader as hostVansLoaderCard } from "./pages/Host/Vans/HostVansCard";
import { loader as hostVansLoaderPhoto } from "./pages/Host/Vans/HostVansPhotos";
import { loader as hostVansLoaderDetail } from "./pages/Host/Vans/HostVansDetails";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="vans" loader={vansLoader} element={<Vans />}></Route>
        <Route
          path="vans/:id"
          element={<VanDetail />}
          loader={vansDetailLoader}
        ></Route>
        <Route path="host" element={<HostLayout />}>
          <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
          <Route
            index
            element={<Dashboard />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="vans/:id"
            element={<HostVansCard />}
            loader={hostVansLoaderCard}
          >
            <Route
              index
              element={<HostVansDetails />}
              loader={hostVansLoaderDetail}
            />
            <Route
              path="pricing"
              element={<HostVansPricing />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="photos"
              element={<HostVansPhotos />}
              loader={hostVansLoaderPhoto}
            />
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
