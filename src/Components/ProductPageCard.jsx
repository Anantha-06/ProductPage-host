import React from "react";
import "../App.css"

function ProductPageCard(props) {
  return (
    <>
      <div>
        <div>
          <img src={props.image} className="productimage-card"/>
        </div>
        <div>{props.title}</div>
        <div>{props.price}</div>
        <div>{props.desc}</div>
      </div>
    </>
  );
}

export default ProductPageCard;
