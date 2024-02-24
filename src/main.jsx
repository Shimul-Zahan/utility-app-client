import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AllProvider } from "./Component/Context/AllContext";
import { router } from "./Component/Router/Router";
import AuthProvider from "./Provider/Authprovider";
import "./index.css";
// import AuthProvider from "./Provider/Authprovider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AllProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </AllProvider>
  </>
);
