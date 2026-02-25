import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul className="navText flex items-center gap-35 max-[1150px]:gap-25 max-[1000px]:gap-16 max-[850px]:gap-12">
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
