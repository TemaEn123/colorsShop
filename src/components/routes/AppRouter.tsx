import { createBrowserRouter } from "react-router-dom";

import BaseLayout from "../layouts/BaseLayout";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Faq from "../pages/Faq/Faq";
import Colors from "../pages/Colors/Colors";
import SingleColor from "../pages/SingleColor/SingleColor";

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "colors",
        element: <Colors />,
      },
      {
        path: "colors/:id",
        element: <SingleColor />,
      },
    ],
  },
]);
