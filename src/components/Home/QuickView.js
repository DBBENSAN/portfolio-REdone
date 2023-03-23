import React from 'react'
import './QuickView.css'


function QuickView({ images }) {
   return (
     <div className="quick-view-container">
       {images.map((image, index) => (
         <div className="card" key={index}>
           <img className="card-image" src={image} alt="project" />
         </div>
       ))}
     </div>
   );
 }
 
 export default QuickView;


