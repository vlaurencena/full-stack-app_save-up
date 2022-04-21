import React from 'react';
import { NavLink } from "react-router-dom";

const NotAuthenticatedHeader = () => {
  return (
    <div className="navbar max-width-1200">
      <NavLink to="/"><img className="save-up-logo" src="http://localhost:1337/uploads/save_up_logo_3b4abda976.png" alt="Save Up Logo" /></NavLink>
      <span className="spacer"></span>
      <NavLink to="/login">Log in</NavLink>
      <NavLink to="/register" className="button-style">Sign up</NavLink>
    </div>
  )
}

export default NotAuthenticatedHeader;