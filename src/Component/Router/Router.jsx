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
				path: "/updateProfile",
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
			{
				path: "/Notes/viewNote",
				element: <ViewNote />,
			},
			{
				path: "/Notes/addTask",
				element: <AddTask />,
			},
			{
				path: "/adminpage",
				element: <AdminPage />,
			},
		],
	},
]);
