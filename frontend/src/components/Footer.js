import React from "react";
import { BsGithub } from 'react-icons/bs';


const Footer = () => {
  return (
    <footer class="footer">
      <p>
        Copyright ©
        <script>
          document.write(new Date().getFullYear())
        </script>
        vlaurencena
      </p>
      <a href="https://github.com/vlaurencena" target="_blank">
      <BsGithub /></a>
    </footer>
  )
}

export default Footer;