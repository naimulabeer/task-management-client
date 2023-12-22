import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Global/Error";
import Blogs from "../pages/Global/Blogs/Blogs";
import SignIn from "../pages/Global/Auth/SignIn/SignIn";
import SignUp from "../pages/Global/Auth/SignUp/SignUp";
import Dashboard from "../layouts/Dashboard";
import TaskPage from "../pages/Task/TaskPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "tasks",
        element: <TaskPage />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
