import React from 'react'
import logo from './components/logo.png'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import {Link} from "react-router-dom";


function Header() {
   
  return (
    <div className='header'>
    <Link to="/">   <img className="header_logo" src={logo}></img> </Link> 
  
    
    <div className="header_option">
    <ul>
            <li><a href="/">Home</a></li>
       <li><a href="/categories">Categories</a></li> 
          <li><a href="/about">About</a></li>
        </ul>
      </div>
      <div className="header_icons">
      <div className="searchIcon_main">
      <input type="text" className="searchText" placeholder="    Type to search.."></input>
       <SearchIcon className='header_searchIcon'/>
    
       </div>
    <Link to ="/login"> <PersonIcon className='header_personIcon'/> </Link>
      </div>
    </div>
  )
}


export default Header


