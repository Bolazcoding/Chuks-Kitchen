import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex gap-30 bg-dark-orange py-16 px-20">
      <div className="flex flex-col w-63">
        <h1 className="productStyle text-[37.02px] leading-[37.02px]">
          Chuks Kitchen
        </h1>
        <p className="footerText">
          Bringing the authentic flavors of Nigerian home cooking to your table,
          with passion and care.
        </p>
      </div>
      <div>
        <nav>
          <h2 className="footerText">Quick Links</h2>
          <ul className="footerNavText flex flex-col gap-2.5 pt-3">
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Explore</NavLink>
            </li>
            <li>
              <NavLink>My Order</NavLink>
            </li>
            <li>
              <NavLink>Account</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <nav>
          <h2 className="footerText">Contact Us</h2>
          <ul className="footerNavText flex flex-col gap-2.5 pt-3">
            <li>
              <NavLink>+234 801 234 5678</NavLink>
            </li>
            <li>
              <NavLink>hello@chukskitchen.com</NavLink>
            </li>
            <li>123 Taste Bivd, Lagos, Nigeria</li>
          </ul>
        </nav>
      </div>

      <div>
        <nav>
          <ul className=" footerNavText flex flex-col gap-2.5">
            <li>
              <NavLink>Facebook</NavLink>
            </li>
            <li>
              <NavLink>Twitter</NavLink>
            </li>
            <li>
              <NavLink>Linkedin</NavLink>
            </li>
            <li>
              <NavLink>Instagram</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
