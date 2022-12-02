import React from 'react';
import ImageBachelors from './ImageBachelors';
import "./plustwo.css";

const BuyingPage = () => {
  return (
    <div>
   
    <div className='cat_main_title'>
    <h1 className='cat_title'>Bachelors</h1>
    </div>
    <div className="cat_main">
    <div className="cat">
        
    <p className="para">Categories</p>
    <hr/>
    <ul>
    <li><a href="/plustwoo">+2</a></li>
    <li><a href="/bachelors">Bachelors</a></li>
    <li><a href="/entrance">Entrance</a></li>
    <li><a href="/school">School Books</a></li>
    
    </ul>
    </div> 
    <div className="booklist_wrapper">
    
    <ImageBachelors/>
    
    
    </div>

   </div>

    </div>
  )
}

export default BuyingPage
