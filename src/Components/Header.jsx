import React from 'react';
import "./Header.css";

export default function Header(props) {
  return (
    <div>
    <nav className="navbar navbar-light bg-dark color">
  <span className="nav-item color mb-0 h1">{props.header}</span>
  
</nav>
</div>
  )
}
