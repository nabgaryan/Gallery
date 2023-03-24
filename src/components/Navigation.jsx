import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/Mountain">Mountain</NavLink>
          <li>
            <NavLink to="/beach">Beaches</NavLink>
          </li>
          <li>
            <NavLink to="/bird">Birds</NavLink>
          </li>
          <li>
            <NavLink to="/food">Food</NavLink>
          </li>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
