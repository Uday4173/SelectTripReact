import {useState} from "react";
import React from "react";
function Card({id,images,info,price,name,removeTour}){
    const[readmore,setreadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`;


    function readMoreHandler(){
        setreadmore(!readmore);
    }


    return(
        <div className="card">
            <img src = {images} className="image"></img>
            <div className="tour-info">
            <div className="tour-details">
                <h4 className="tour-price">Rs {price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>

            <div className="description">
                {description}
                <span className="read-more" onClick={readMoreHandler}>
                    {readmore ? `..Show Less` : `Read More`}
                </span>
            </div>

            

                
           </div>
           <button className="btn-red" onClick={() => removeTour(id)}>Remove Tour</button>
          

            
        </div>
    );

}

export default Card;