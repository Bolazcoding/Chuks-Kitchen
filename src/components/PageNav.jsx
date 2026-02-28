import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul className="navText flex items-center gap-35 max-[1150px]:gap-25 max-[1000px]:gap-16 max-[850px]:gap-12 max-[790px]:flex-col max-[790px]:gap-16">
        <li className="navTextHover">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="navTextHover">
          <NavLink to="/explore">Explore</NavLink>
        </li>
        <li className="navTextHover">
          <NavLink to="/cart">My Orders</NavLink>
        </li>
        <li className="navTextHover">
          <NavLink>Account</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
