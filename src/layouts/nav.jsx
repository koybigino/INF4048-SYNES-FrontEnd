import { useState, useEffect } from "react";
//import { Transition } from "react-transition-group";
import { Outlet, useLocation, useNavigate, Link, NavLink } from "react-router-dom";
// import Logo from '../assets/img/logo 1.png'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton
} from "@material-tailwind/react";
import Footer from "./footer";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    nav_home()
  }, []);


  function nav_home() {
    console.log(window.location.pathname, 'pathname');

    if (window.location.pathname === '/me') {
      setTransparent(false);
    }
  }

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to='/' className="flex items-center transition duration-300 easy-in-out hover:text-aim sm:ml-12" activeClassName="active">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to='/f' className="flex items-center transition duration-300 easy-in-out hover:text-aim sm:ml-12" activeClassName="active">
          Account
        </NavLink>

      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to='/g' className="flex items-center transition duration-300 easy-in-out hover:text-aim sm:ml-12" activeClassName="active">
          Blocks
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to='/me' activeClassName="active" className="flex items-center transition duration-300 easy-in-out hover:text-aim sm:ml-12">
          Profile
        </NavLink>
      </Typography>
    </ul>
  );

  return (<>
    <Navbar className={`mx-auto py-2 px-4 lg:px-8 lg:py-0 min-w-full rounded rounded-none border shadow border-0`}>
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className='py-3'
        >
          <Link to='/'
            className="mr-4 cursor-pointer font-normal flex items-center ">
            {/* <img src={Logo} alt="" className="w-20" /> */}
            <p className="font-bold text-[#3f6b75] text-lg">Synes</p>
          </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Link to='/' className="ml-4 sm:ml-72">
          <Button
            color="orange"
            className="bg-orange-600 rounded-full ">
            Get Started 
          </Button>
        </Link>
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
      <MobileNav open={openNav}>
        {navList}
      </MobileNav>
    </Navbar>

    <div className=" mx-auto">
      <Outlet />
    </div>
    {/* <Footer /> */}
  </>);
}
