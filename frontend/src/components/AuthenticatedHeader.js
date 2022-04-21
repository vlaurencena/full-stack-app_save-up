import React from "react";
import { NavLink } from "react-router-dom";

function AuthenticatedHeader(props) {

  const logout = () => {
    localStorage.clear();
    props.setAuthenticated(false)
  }

  return (
    <div className="navbar">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/resources">Resources</NavLink>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default AuthenticatedHeader;