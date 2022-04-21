import React from 'react';
import { NavLink } from "react-router-dom";

const NotAuthenticatedHeader = () => {
  return (
    <div className="navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/register">Register</NavLink>
  </div>
  )
}

export default NotAuthenticatedHeader