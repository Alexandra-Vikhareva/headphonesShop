import React from "react";
import "../styles/App.css";

const Card = (props) =>{
    console.log('kdjvhsdiv', props)
    return(
        <div className="card">
            <div className="card_content">

                <img  src={props.item.img} 
                    alt="headphones image" 
                    height='240px' 
                    width='210px'
                />

                <div className="info">

                    <div className="description">
                        <h3 className="title">{props.item.title}</h3>
                        <p className="rate">{props.item.rate}</p>
                    </div>

                    <div className="value_container">
                        <p className="price">{props.item.price} Р</p>
                        <button className="buy">Купить</button>
                    </div>

                </div>
            </div>
      </div>
    )
}

export default Card;