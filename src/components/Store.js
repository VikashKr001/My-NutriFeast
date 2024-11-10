import React, { useState } from "react";

function Store({ product, handleEvent }) {
    function handleButtonClick() {
        handleEvent(product.name);
    }
   
    return (
        <div className="col-12 col-sm-6 col-md-4 mt-3 ">
        <div className="card text-center ">
            <img
                src={`/images/${product.image}`}
                alt={`${product.name} - ${product.size}`}
                className="img-fluid card-img-top responsive-image"
            />
            <div className="card-body">
                <h5 className="card-title">Jar Size: {product.size}</h5>
                <p className="rs">Price: Rs {product.mrp}</p>
                <button 
                    className="btn btn-primary btn_border"
                    onClick={handleButtonClick}
                >
                    Place Order
                </button>
            </div>
        </div>
    </div>
    
    );
}

export default Store;
