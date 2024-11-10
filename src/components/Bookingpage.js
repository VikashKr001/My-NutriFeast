import React, { useState } from "react";
function Bookingpage({product,Backstore})
{  
      function BackHome(sectionName)
      {
        Backstore(sectionName)
      }
      function handleusername(event)
      {
              setname(event.target.value)
      }
      function handleuseraddress(event)
      { 
            setaddress(event.target.value)
            
      }
      function Placeorder() {
        let whatsAppMessage = `Hello, my name is ${name} from ${address}. 
    I would like to order the Oats jar of ${product.name} flavor. 
    Please confirm my booking.`;
    
        let encodedMessage = encodeURIComponent(whatsAppMessage);
        let whatsappNumber = "9931610421";
        window.location = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`; 
    } 
      let[name,setname]=useState(" ");
      let[address,setaddress]=useState(" ");
    return(
        <>
            <div className="container mt-5">
    <div className="row">
        <div className="col-12">  
            <div className="row justify-content-center">
                <div className="col-12 col-md-7 bookingpageborder">
                    <h2>We appreciate your trust in MyNutriFeast</h2>
                    <h5 className="text-center">Your Choice is {product.name} flavor</h5>
                    <div className="row">
                        <div className="col-12 m-1">
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <h5>Enter your name</h5>
                                </div>
                                <div className="col-12 col-md-8">
                                    <input type="text" className="form-control" onKeyUp={handleusername} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 m-1">
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <h5>Enter your address</h5>
                                </div>
                                <div className="col-12 col-md-8">
                                    <input type="text" className="form-control" onKeyUp={handleuseraddress} />
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary m-1 btn_border" onClick={Placeorder}>Confirm Booking</button>
                            <button className="btn btn-primary m-1 btn_border" onClick={() => BackHome("ourstore")}>Back to Store</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
    )
}
export default Bookingpage;