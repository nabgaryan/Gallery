import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Item, { loader as loadImages } from "./components/Item";
import Search, { loader as loadSearchImages } from "./components/Search";
import Root from "./components/Root";
import Error from "./components/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "/mountain",
          element: <Item searchTerm="mountain" />,
          loader: loadImages,
        },
        {
          path: "/beach",
          element: <Item searchTerm="beach" />,
          loader: loadImages,
        },
        {
          path: "/bird",
          element: <Item searchTerm="bird" />,
          loader: loadImages,
        },
        {
          path: "/food",
          element: <Item searchTerm="food" />,
          loader: loadImages,
        },

        {
          path: "/search/:searchInput",
          element: <Search />,
          loader: loadSearchImages,
        },
      ],
    },
  ]);

  return (
    <div className="container">
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
