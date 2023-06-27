import { useState, useEffect } from "react";
//import { Transition } from "react-transition-group";
import { Outlet } from "react-router-dom";
// import Logo from '../assets/img/logo 1.png'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useRecoilValue } from "recoil";
import { storeToken } from "../../stores/storeAtoms";
import { HashLink } from "react-router-hash-link";
import Profile from "../profile/Profile";
import NotificationBadge from "../badge/NotificationBadge";

export default function NavSamePage() {
  const [openNav, setOpenNav] = useState(false);
  const [transparent, setTransparent] = useState(true);
  const token = useRecoilValue(storeToken);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <HashLink
          to="#users"
          className="flex items-center transition duration-300 easy-in-out hover:text-aim sm:ml-12"
          activeClassName="active"
        >
          Users
        </HashLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <HashLink
          to="#finances"
          className="flex items-center transition duration-300 easy-in-out hover:text-aim sm:ml-12"
          activeClassName="active"
        >
          Finances
        </HashLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <HashLink
          to="#sections"
          className="flex items-center transition duration-300 easy-in-out hover:text-aim sm:ml-12"
          activeClassName="active"
        >
          Sections
        </HashLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <HashLink
          to="#sanctions"
          activeClassName="active"
          className="flex items-center transition duration-300 easy-in-out hover:text-aim sm:ml-12"
        >
          Sanctions
        </HashLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <HashLink
          to="#traçabilite"
          activeClassName="active"
          className="flex items-center transition duration-300 easy-in-out hover:text-aim sm:ml-12"
        >
          Traçabilité
        </HashLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <HashLink
          to="#droits"
          activeClassName="active"
          className="flex items-center transition duration-300 easy-in-out hover:text-aim sm:ml-12"
        >
          Droits
        </HashLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <HashLink
          to="#activites"
          activeClassName="active"
          className="flex items-center transition duration-300 easy-in-out hover:text-aim sm:ml-12"
        >
          Activités
        </HashLink>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar
        className={`mx-auto py-2 px-4 lg:px-8 lg:py-0 min-w-full rounded-none shadow border-0`}
      >
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography as="a" href="#" variant="small" className="py-3">
            <HashLink
              to="/"
              className="mr-4 cursor-pointer font-normal flex items-center "
            >
              {/* <img src={Logo} alt="" className="w-20" /> */}
              <p className="font-bold text-[#3f6b75] text-lg">Synes</p>
            </HashLink>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          {token ? (
           <> <Profile />
            <NotificationBadge /> </>
          ) : (
            <Button color="orange" className="rounded-full w-fit">
              log in
            </Button>
          )}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>

      <div className=" mx-auto">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
}
