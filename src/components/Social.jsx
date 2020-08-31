import React from "react";
import {FaInstagram, FaWhatsapp, FaTwitter, FaFacebook} from "react-icons/fa";

const Social = () => (
  <div>
    <a className="anchor" href="https://www.instagram.com/" target="_blank"><FaInstagram /> &nbsp;</a>
    <a className="anchor" href="https://www.whatsapp.com/" target="_blank"><FaWhatsapp /> &nbsp;</a>
    <a className="anchor" href="https://www.twitter.com/" target="_blank"><FaTwitter /> &nbsp;</a>
    <a className="anchor" href="https://www.facebook.com/" target="_blank"><FaFacebook /></a>
<style jsx>{`
  .anchor {
    color: #ff5722;
  }

  .anchor:hover {
    color: #c41c00;
    text-decoration: none;
  }
`}</style>
  </div>
)

export default Social;