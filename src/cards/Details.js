import React from 'react'
import book4 from '../components/book4.jpg';
import './details.css';
import Detailscarousel from './Detailscarousel';
import Detailscarouseltwo from './Detailscarouseltwo';

const Details = () => {
  return (
    <div>
    <div className="selected-book">
     <img className="details_img" src={book4}/> 
      <div className="book_info">
       <div className="book-title">The Invisible Life of Addie Larue </div>
            <p className="author">By Ram Hari Prasad</p>
           
            <div className="deets">
            <div className="Price">Original Price : Rs. 2000</div>
            <br/>
            <div className="Condition">Condition : Almost new</div>
            <br/>
            <div className="Year">Publication year : 1995</div>
        </div>
        </div>
  
        
     <div className="container"><h1 className='det_pri'>Price: Rs. 900</h1>
     <br/>

          <button  type="button" className="det_btn">Buy Book</button>
      <br/>
            <br/>
          <br/>
          <p>Add to wishlist</p>
    </div>
    <div className="uploader">
        <div className="Name">Uploaded By: Kubs</div>
        <p className="location">Kalimati,Kathmandu</p>
        <div className="Number">Contact No. : 9866682020</div>
     </div>
     </div>

     <hr/>

     <div classNameName="line1"></div>
     <br/>
     <div classNameName="Container1"><h2 className="det_pri">Other uploads by Kubs</h2> 
         <br/>
     </div>
     
   
     <Detailscarousel/>
     <hr/>
<br/>
     <div classNameName="Container2"><h2 className="det_pri">Similar Books</h2> 
    <br/>
     <Detailscarouseltwo/>
     <br/>
 </div>
   </div>



   
  

  )
};
export default Details
