import React from "react";
import { NavLink } from "react-router-dom";

function AuthenticatedHeader(props) {

  const logout = () => {
    localStorage.clear();
    props.setAuthenticated(false)
  }

  return (
    <div className="navbar max-width-1200">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/resources">Resources</NavLink>
      <button className="button-style logout" onClick={logout}>Logout</button>
    </div>
  )
}

export default AuthenticatedHeader;