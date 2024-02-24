import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../Component/Page/Home/HomePage";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import UpdateProfile from "../Authentication/UpdateProfile/UpdateProfile";
import Main from "../Layout/Main";
import AdminPage from "../Page/Admin/AdminPage";
import Calender from "../Page/Widgets/Calender/Calender";
import Converter from "../Page/Widgets/Converter/Converter";
import AddNote from "../Page/Widgets/Note/AddNote/AddNote";
import AddTask from "../Page/Widgets/Note/AddTask/AddTask";
import Note from "../Page/Widgets/Note/Note";
import ViewNote from "../Page/Widgets/Note/ViewNote/ViewNote";
import Widgets from "../Page/Widgets/Widgets";
import Navbar from "../Share/Navbar";
import UpdateNote from "../Page/Widgets/Note/UpdateNote/UpdateNote";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/Navbar",
        element: <Navbar />,
      },
      {
        path:"/updateProfile/:email",
        element: <PrivateRoute><UpdateProfile /></PrivateRoute>,
      },
      {
        path: "/widgets",
        element: <Widgets />,
      },
      {
        path: "/pdfConverter",
        element: <Converter />,
      },
      {
        path: "/calendar",
        element: <PrivateRoute><Calender /></PrivateRoute>,
      },
      {
        path: "/Notes",
        element: <Note />,
      },
      {
        path: "/Notes/addNote",
        element: <AddNote />,
      },
      {
        path: "/Notes/viewNote/:id",
        element: <ViewNote />,
      },
      {
        path: "/Notes/addTask/:id",
        element: <AddTask />,
      },
      {
        path: "/Notes/updateNote/:id",
        element: <UpdateNote />,
      },
      {
        path: "/adminpage",
        element: <PrivateRoute><AdminPage /></PrivateRoute>,
      },
    ],
  },
]);
