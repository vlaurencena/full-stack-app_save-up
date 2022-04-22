import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';

function AuthenticatedHeader(props) {

  const NAVBAR_LINKS = gql`
    query GetAuthenticatedNavbarLinks{
      authenticatedNavbarLinks {
        data {
          attributes {
            text
            link
          }
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(NAVBAR_LINKS);

  //   useEffect(() => {
  //  loading === false && console.log(data.authenticatedNavbarLinks.data);
  //   }, [loading]);

  const logout = () => {
    localStorage.clear();
    props.setAuthenticated(false)
  }

  return (
    <div className="navbar max-width-1200">
      {loading === false && data.authenticatedNavbarLinks.data.map(link =>
        <NavLink key={link.attributes.link} to={link.attributes.link}>{link.attributes.text}</NavLink>
      )}
      <button className="button-style logout" onClick={logout}>Logout</button>
    </div>
  )
}

export default AuthenticatedHeader;

