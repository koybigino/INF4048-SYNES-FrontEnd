import React from "react";

import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";

import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { storeUser } from "../../stores/storeAtoms";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    to: "/dashboard/profile",
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    to: "/edit-profile",
  },
  {
    label: "Dashboard",
    icon: PresentationChartBarIcon,
    to: "/dashboard/users",
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function Profile() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const [currentUser, setCurrentuser] = useRecoilState(storeUser);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-main p-0.5"
            src={currentUser.photo.image_link}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, to }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <Link to={to} className="w-fit">
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            </Link>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default Profile;
