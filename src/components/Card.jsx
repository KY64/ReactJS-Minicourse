import React from "react";

const Card = ({ img, name, price, brand }) => (
  <div
    className="d-inline-block rounded-0 border-0 card mt-4 mr-4"
    style={{ width: "14.2rem" }}
  >
    <img src={img} className="card-img-top" style={{height:"240px",backgroundColor:"#f0f0f0"}} />
    <div className="card-body pb-0">
      <h6 className="font-weight-bold m-0 p-0" style={{color:"black"}}>{name}</h6>
      <p className="orange m-0">IDR {price}</p>
      <p className="text-muted text-right">{brand}</p>
    </div>
    <style jsx>{`
      .card {
        cursor: pointer;
        transition: 0.2s;
      }

      .card:hover {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
      }
    `}</style>
  </div>
);


export default Card;