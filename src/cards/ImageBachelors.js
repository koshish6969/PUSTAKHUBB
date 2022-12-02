import React from 'react'
import Mycard from '../cards/Mycard.js'
import books from '../components/books.png'
import plustwo from '../components/+2.jpg'
import entrance from '../components/Entrance.jpg'
import school from '../components/School.jpg'
import './Imagecarousel.css'
import book1 from '../components/book1.jpg';
import book2 from '../components/book2.jpg';
import book3 from '../components/book3.jpg';
import book4 from '../components/book4.jpg';
import book5 from '../components/book5.jpg';

import './Imagecarousel.css'
const Imagecarousel = () => {

    return (
        

        
            <div className="product-container">
           
            
            
                <Mycard  name="+2 Biology" img={book1}  seller="Ram" price="Rs. 550"  />
                <Mycard  name="+2 Chemistry" img={book2} seller="Nhujaw" price="Rs. 600"/>
                <Mycard  name="+2 Mathematics" img={book3} seller="Koshish" price="Rs. 300" />
                <Mycard  name="+2 Physics" img={book4} seller="Kabita" price="Rs.1000"/>
                <Mycard  name="+2 Business" img={book5} seller="Krishna" price="Rs.2000"/>
                <Mycard  name="+2 Account" img={entrance} seller="Mbappe" price="Rs. 150"/>
    
        
        </div>
    )
}

export default Imagecarousel