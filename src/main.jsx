import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Components/Layout.jsx";
import Error from "./Components/Error.jsx";

import Home from "./Components/Home.jsx";
import AppliedJobs from "./Components/AppliedJobs.jsx";
import Blogs from "./Components/Blogs.jsx";
import JobDetails from "./Components/JobDetails.jsx";
import Statistics from "./Components/Statistics.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error></Error>,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/fakeDB.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/jobs",
        element: <AppliedJobs />,
        loader: () => fetch("/fakeDB.json"),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
        loader: () => fetch("/fakeDB.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
