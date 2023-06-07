// import React, { Component } from 'react'
// export default class Navigation extends Component{
//     render(){
//         return(
//           <div id="header">
//                <nav>
//              <ul id="nav">
//                  <li><a className='active' href='#home'>Home</a></li>
//                  <li><a href='#news'>News</a></li>
//                  <li><a href='#about'>About</a></li>
//                  <li><a href='#contact'>Contact</a></li>
//              </ul>
//            </nav>
//            </div>

//         )
//     }
// }

// import React from 'react'
// export default function Navigation() {
//   return (
//     <div id="header">
//     <nav>
//   <ul id="nav">
//       <li><a className='active' href='#home'>Home</a></li>
//       <li><a href='#news'>News</a></li>
//       <li><a href='#about'>About</a></li>
//       <li><a href='#contact'>Contact</a></li>
//   </ul>
// </nav>
// </div>
//   )
// }

import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div>
      <nav
        style={{
          maxHeight: 46,
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ul id="nav" style={{ backgroundColor: theme.backgroundColor }}>
          <li>
            <a
              style={{ color: theme.color, outline: "none" }}
              className="active"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a style={{ color: theme.color, outline: "none" }} href="#news">
              News
            </a>
          </li>
          <li>
            <a style={{ color: theme.color, outline: "none" }} href="#about">
              About
            </a>
          </li>
          <li>
            <a style={{ color: theme.color, outline: "none" }} href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div style={{ position: "relative", paddingTop:7 }}>
          <a
            style={{ color: theme.color, outline: "none" }}
            className="switch-mode"
            href="#"
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: "none",
            }}
            data-testid="toggle-theme-btn"
          >
            Switch Nav to {!dark ? "Dark" : "Light"} mode
          </a>
        </div>
      </nav>
    </div>
  );
}
