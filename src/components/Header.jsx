import Form from "./Form";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e, searchEntry) => {
    e.preventDefault();
    let urlsearch = `/search/${searchEntry}`;
    navigate(urlsearch);
  };

  return (
    <div>
      <h1>Gallery</h1>
      <Form handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default Header;
