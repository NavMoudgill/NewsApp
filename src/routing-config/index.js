import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/home";
import News from "../components/News";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: (
          <News key="general" pageSize={10} country={"in"} category="general" />
        ),
      },
      {
        path: "/business",
        element: (
          <News
            key="business"
            pageSize={10}
            country={"in"}
            category="business"
          />
        ),
      },
      {
        path: "/entertainment",
        element: (
          <News
            key="entertainment"
            pageSize={10}
            country={"in"}
            category="entertainment"
          />
        ),
      },
      {
        path: "/general",
        element: (
          <News key="general" pageSize={10} country={"in"} category="general" />
        ),
      },
      {
        path: "/health",
        element: (
          <News key="health" pageSize={10} country={"in"} category="health" />
        ),
      },
      {
        path: "/science",
        element: (
          <News key="science" pageSize={10} country={"in"} category="science" />
        ),
      },
      {
        path: "/sports",
        element: (
          <News key="sports" pageSize={10} country={"in"} category="sports" />
        ),
      },
      {
        path: "/technology",
        element: (
          <News
            key="technology"
            pageSize={10}
            country={"in"}
            category="technology"
          />
        ),
      },
    ],
  },
]);
