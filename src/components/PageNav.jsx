import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul className="navText flex items-center gap-40">
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Explore</NavLink>
        </li>
        <li>
          <NavLink>My Orders</NavLink>
        </li>
        <li>
          <NavLink>Account</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
