import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/nav/nav";
import NavSamePage from "../components/nav/navSamePage";
import { useRecoilValue } from "recoil";
import { storeUserGet } from "../stores/storeSelector";
import { storeUser } from "../stores/storeAtoms";

function Navbar() {
  const locat = useLocation();
  const getUser = useRecoilValue(storeUserGet);
  const getCurrentUser = useRecoilValue(storeUser);

  return (
    <> {getUser && (locat.pathname.includes("dashboard") ? <Nav user={getCurrentUser ? getCurrentUser : getUser}/> : <NavSamePage user={getUser} />)}</>
  );
}

export default Navbar;
