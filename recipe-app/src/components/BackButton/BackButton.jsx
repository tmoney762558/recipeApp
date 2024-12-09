import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoArrowBackCircle } from "react-icons/io5";

const BackButton = () => {
  return (
    <NavLink
    to={"/"}
  >
    <IoArrowBackCircle className="absolute lg:left-7 left-3 lg:top-7 top-3" fontSize={"3rem"} fill="rgb(252 165 165)" title="Back">
      Back
    </IoArrowBackCircle>
  </NavLink>
  )
}

export default BackButton