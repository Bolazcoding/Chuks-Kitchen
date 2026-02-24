import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { arrowUp } from "ionicons/icons";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-dark-orange py-16 px-20 max-[1000px]:px-10 max-[1000px]:py-10">
      <div className="flex gap-30 max-[1000px]:gap-12 max-[800px]:gap-8 max-[700px]:flex-col max-[700px]:text-center">
        <div className="flex flex-col w-63 max-[700px]:w-full max-[700px]:px-12 max-[700px]:gap-2 max-[365px]:px-2.5 ">
          <Logo />
          <p className="footerText">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
          <hr className="mt-5 text-soft-gray min-[700px]:hidden" />
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
      </div>
      <div className="flex items-center justify-between mt-10 max-[700px]:flex-col">
        <p className="footerNavText">
          &copy; 2020 Lift Media. All rights reserved.
        </p>
        <div className="bg-primary-blue p-3 rounded-full w-12 h-12 flex items-center justify-center max-[700px]:mt-6 max-[700px]:w-10 max-[700px]:h-10">
          <IonIcon icon={arrowUp} className="text-white text-2xl" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
