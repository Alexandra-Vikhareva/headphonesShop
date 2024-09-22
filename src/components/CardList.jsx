import React from "react";
import "../styles/App.css";
import Card from "./Card";

const CardList = ({headphones, title}) => {

    return(
        <div>
            <h2>{title}</h2>
            {headphones.map((item) => 
                <Card item = {item} key={Date.now()}/>)}
        </div>
    );
};

export default CardList;