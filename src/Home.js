import React from 'react'
import "./Home.css";
import banner from './components/banner.png';
// import Imagecarousel from './Imagecarousel';
import books from './components/books.png';
import {Link} from "react-router-dom";
import clipart2 from "./components/clipart2.jpg"
import BuyingPage from './cards/PlusTwo';
function Home() {
  const handleClick=()=>{
    //<BuyingPage/>
    alert("you clicked")
  }


  return (
    <>
    <div className="home">
    
    <div className="top_banner">
    <h1 className="top_header_main">
    <h1 className='top_header'>Online books</h1><p className="top_header_two">
     made easier</p></h1>
      <img className="home_image" src={clipart2}/>
      </div>
    <div className="banner">
    <div className="banner_one">
    
    <h1 className='cat_name'>Buy old books</h1>
    <button className="button_buy">Start</button>
    </div>

    <div className="banner_two">
    
    <h1 className='cat_name'>Sell old books</h1>
    <Link to="/addbook"><button className="button_sell">Start</button> </Link>
    </div>
    </div>



    </div>
    
 </> )
}

export default Home
