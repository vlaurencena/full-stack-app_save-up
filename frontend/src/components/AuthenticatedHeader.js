import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import { useHistory } from "react-router-dom";

function AuthenticatedHeader(props) {

  const history = useHistory();

  const NAVBAR_LINKS = gql`
  query GetAuthenticatedNavbarLinks {
    authenticatedNavbar {
      data {
        attributes {
          AuthenticatedNavbarLink {
            text
            href
          }
        }
      }
    }
  }`
    ;

  const { loading, data } = useQuery(NAVBAR_LINKS);


  useEffect(() => {
    loading === false && console.log(data.authenticatedNavbar.data.attributes.AuthenticatedNavbarLink);
  }, [loading]);

  const logout = () => {
    localStorage.clear();
    props.setAuthenticated(false);
    history.push("/");
  }

  return (
    <div className="navbar max-width-1200">
      {loading === false && data.authenticatedNavbar.data.attributes.AuthenticatedNavbarLink.map((link, index) =>
        <NavLink className="button-style" activeClassName="navbar-link-active" key={index} to={link.href}>{link.text}</NavLink>
      )}
      <button className="button-style logout" onClick={logout}>Logout</button>
    </div>
  )
}

export default AuthenticatedHeader;

