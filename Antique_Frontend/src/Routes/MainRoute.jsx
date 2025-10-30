// src/Routes/Router.jsx
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Sell from "../Pages/Sell";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import WeaponDetails from "../Components/ShopComponents/WeaponDetails";
import Jobs from "../Pages/Jobs";
import Login from "../Components/Shared/Login";
import PrivateRoute from "../Components/Routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/shop/:id", element: <WeaponDetails /> },
      { path: "/sell", element: <PrivateRoute><Sell /></PrivateRoute> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/jobs", element: <Jobs /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default router;
