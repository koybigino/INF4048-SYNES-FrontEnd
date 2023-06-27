import React from 'react'
import { useLocation } from 'react-router-dom';
import Nav from '../components/nav/nav';
import NavSamePage from '../components/nav/navSamePage';

function Navbar() {
    const locat = useLocation()
  return (
    <>
        {locat.pathname !== "/" ? <Nav /> : <NavSamePage />}
    </>
  )
}

export default Navbar