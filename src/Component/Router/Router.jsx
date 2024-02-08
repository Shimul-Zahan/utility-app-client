import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../../Component/Page/Home/HomePage";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import Navbar from "../Share/Navbar";
import Widgets from "../Page/Widgets/Widgets";
import UpdateProfile from "../Authentication/UpdateProfile/UpdateProfile";
import Converter from "../Page/Widgets/Converter/Converter";
import Calender from "../Page/Widgets/Calender/Calender";
import Note from "../Page/Widgets/Note/Note";
import AddNote from "../Page/Widgets/Note/AddNote/AddNote";

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
        path: "/UpdateProfile",
        element: <UpdateProfile />,
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
        element: <Calender />,
      },
      {
        path: "/Notes",
        element: <Note />,
      },
      {
        path: "/Notes/addNote",
        element: <AddNote />,
      },
    ],
  },
]);
