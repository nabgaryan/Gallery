import "./App.css";
import PhotoContextProvider from "./store/PhotoContext";
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  createBrowserRouter,
  RouterProvider,
  useParams
} from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import Root from "./components/Root";

function App() {

  const handleSubmit = (e, history, searchInput) => {
    history = [];
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  const params = useParams();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root handleSubmit={handleSubmit} />,
      children: [
        { path: "/mountain", element: <Item searchTerm="mountain" /> },
        { path: "/beach", element: <Item searchTerm="beach" /> },
        { path: "/bird", element: <Item searchTerm="bird" /> },
        { path: "/food", element: <Item searchTerm="food" /> },
        {
          path: "/search/:searchInput",
          element: <Search searchTerm={params.searchInput} />,
        },
        { path: "/food", element: <Item searchTerm="food" /> },
      ],
    },
  ]);

  return (
    <PhotoContextProvider>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </PhotoContextProvider>
  );
}

export default App;
