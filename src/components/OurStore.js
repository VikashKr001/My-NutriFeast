import React, { useState } from "react";
import Store from "./Store";
import Bookingpage from "./Bookingpage";

function OurStore(props) { 
    function handleclick(sectionName) {
        props.handleclick(sectionName);
    }
    function Backstore(sectionName)
    {
        setview("store");
        setlist(data);
    }

    function handleBookingList(name) {
        let Bookinglist=list.filter((e)=>e.name==name);
        setview("Booking");
        setlist(Bookinglist);
        

    
    }

    const data = [
        { id: 1, image: "Ourproduct2.jpg", name: "Saffron and Cardamom", size: "250gm", mrp: 350 },
        { id: 2, image: "Ourproduct4.jpg", name: "Super Seeds and Dates", size: "250gm", mrp: 350 },
        { id: 3, image: "Ourproduct5.jpg", name: "Chocolate and Coconut", size: "250gm", mrp: 350 },
        { id: 4, image: "Ourproduct7.jpg", name: "Peanuts Sesame", size: "250gm", mrp: 350 }
    ];
    let[list,setlist]=useState(data);
     let [view,setview]=useState("store");
     
    return (
        <>  
            { view==="store"&&<div className="container myborder mt-1">
                <div className="row align-items-center ">
                    <div className="col-12 col-md-4 text-center">
                        <img 
                            src='/images/logo.jpg' 
                            alt='Logo' 
                            className="img-fluid" 
                        />
                    </div>
                    <div className='col-12 col-md-8 text-center text-md-left'>
                        <h1>Welcome to My Nutrifeast Store</h1>
                        <h5>Now Healthy Can Be Tasty</h5>
                        <h3>Savor the Goodness of Dry Fruits</h3>
                        <div className="mt-3">
                            <button className='btn btn-primary m-1 btn_border' onClick={() => handleclick("Homepage")}>Back To Home</button>
                            <button className='btn btn-secondary m-1 btn_border' onClick={() => handleclick("ourproduct")}>Our Products</button>
                        </div>
                    </div>
                </div>
            </div>
}
            {view==="store" &&<div className="container mt-4">
                <div className="row">
                    {list.map((item) => (
                        <Store product={item} key={item.id} handleEvent={handleBookingList} />
                    ))}
                </div>
            </div>}
            {
                view=="Booking" && list.map((list,index)=>(
                       <Bookingpage product={list} key={index} Backstore={Backstore}/>
                )) 
            }
        </>
    );
}

export default OurStore;
