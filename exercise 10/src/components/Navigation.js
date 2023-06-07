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

import React from 'react'
export default function Navigation() {
  return (
    <div id="header">
    <nav>
  <ul id="nav">
      <li><a className='active' href='#home'>Home</a></li>
      <li><a href='#news'>News</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#contact'>Contact</a></li>
  </ul>
</nav>
</div>
  )
}
