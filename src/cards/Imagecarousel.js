import React from 'react'
import Mycard from '../cards/Mycard.js'
import books from '../components/books.png'
import plustwo from '../components/+2.jpg'
import entrance from '../components/Entrance.jpg'
import school from '../components/School.jpg'
import './Imagecarousel.css'

import './Imagecarousel.css'
const Imagecarousel = () => {

    return (
        

        
            <div className="product-container">
           
            
            
                <Mycard  name="Textbook on Physics" img={entrance}  seller="Ram" price="Rs. 550"  />
                <Mycard  name="Chemistry Booster" img={plustwo} seller="Nhujaw" price="Rs. 600"/>
                <Mycard  name="Guide on Mathematics" img={entrance} seller="Koshish" price="Rs. 300" />
                <Mycard  name="Complete Physics" img={school}seller="Kabita" price="Rs.1000"/>
                <Mycard  name="Business Mathematics" img={plustwo} seller="Krishna" price="Rs.2000"/>
                <Mycard  name="Account Book" img={entrance} seller="Mbappe" price="Rs. 150"/>
    
        
        </div>
    )
}

export default Imagecarousel