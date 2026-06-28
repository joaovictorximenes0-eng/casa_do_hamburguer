import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Pedidos from "./pages/Pedidos";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-red-500">
      <Header />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pedidos",
        element: <Pedidos />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
