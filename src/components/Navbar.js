import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <section className="nav-container">
    <h1 style={{ fontSize: '50px', margin: '5px 0', fontFamily: "'Bungee Spice', cursive" }}>Math Magicians</h1>
    <ul className="links">
      <li><Link to="/" className="link">Home</Link></li>
      <li className="separator" />
      <li><Link to="/calculator" className="link">Calculator</Link></li>
      <li className="separator" />
      <li><Link to="/quote" className="link">Quote</Link></li>
    </ul>
  </section>
);

export default Navbar;
