import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => (
  <nav className="text-center">
    <img className="d-block mx-auto p-3" width="100px" src="/icon.png" />
    <Link to="/" className="mx-4 orange-h">Home</Link>
    <Link to="/products" className="orange-h">Products</Link>
<style jsx>{`

`}</style>
  </nav>
)

export default Navbar;