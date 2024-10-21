import React from "react";
import './block4.scss'
import '../main.scss'


import categoris from "../API/JSON.json"


const Categori = () =>{

    const data = categoris;
    return(
        <div className="card-inner">
            {data.map((item)=>(
                <div className="categories-card" key={item.name}>
                    <p className="card-type">{item.type}</p>
                    <img src={item.image} alt="" className="categ-img"/>
                    <div className="name-price">
                        <h1>{item.name}</h1>
                        <div className="categ-price">
                            <p className="orig-price">${item.original_price}</p>
                            <p className="sale-price">${item.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}



export default Categori;