import React from "react";
function Aboutus(props)
{   
    
     function handleclick(sectionName)
     {
                 props.handleclick(sectionName)
     }
     function openWhatsapp()
     {
        let whatsAppMessage = " ";
        let encodedMessage = encodeURIComponent(whatsAppMessage);
         let whatsappNumber="9931610421";
        window.location = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`; 
     }
    function openInsta()
    {
        window.open('https://www.instagram.com/mynutrifeast/', '_blank');
    }
    
    
    return(

        <><div className="container myborder mt-1">
        <div className="row align-items-center">
            <div className="col-12 col-md-4 text-center">
                <img 
                    src='/images/logo.jpg' 
                    alt='Logo' 
                    className="img-fluid logo-image" 
                />
            </div>
            <div className='col-12 col-md-8 text-center text-md-left'>
                <h1>My Nutrifeast</h1>
                <h5>Now Healthy Can Be Tasty</h5>
                <h3>Savor the Goodness of Dry Fruits</h3>
                <div className="mt-3">
                    <button className='btn btn-primary m-1 btn_border' onClick={() => handleclick("ourproduct")}>Our Products</button>
                    <button className='btn btn-primary m-1 btn_border' onClick={() => handleclick("ourstore")}>Our Store</button>
                </div>
            </div>
        </div>
    </div>
    
    <div className="container mt-2">
    <div className="row">
        <div className="col-12 col-md-8 mb-3">
            <h3>About Us</h3>
            <p>
                MyNutriFeast, where health meets indulgence! We believe that nutritious food should never compromise on flavor. Our journey began with a simple idea: to create delicious, homemade oat jars that not only satisfy your cravings but also nourish your body. Each of our handcrafted oat jars is made with love and care, using only the finest ingredients. We offer a delightful variety of flavors, each blended with a medley of wholesome dry fruits to elevate your snacking experience. Whether you’re looking for a quick breakfast, a post-workout boost, or a healthy treat, our oat jars are the perfect choice.
                At MyNutriFeast, we are passionate about quality and sustainability. Our oats are sourced from trusted suppliers, and we take pride in our eco-friendly packaging. We aim to inspire healthy eating habits without sacrificing taste, making it easy for you to enjoy nutritious meals on the go.
                Join us on this flavorful journey towards a healthier lifestyle. Taste the difference with MyNutriFeast—where every jar is a celebration of wholesome goodness!
            </p>
            <h3>Join Us :</h3>
            <h5>On WhatsApp & Instagram</h5> 
            
            <div className="container btn-group">
                <div className="row">
                    <div className="col-12 ">
                    <button className='btn btn-primary  btn_border' onClick={() => openWhatsapp()}>WhatsApp</button>
                     <button className='btn btn-primary m-1 btn_border' onClick={() => openInsta()}>Instagram</button>
           
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end mb-3">
            <img
                src='images/Aboutus1.jpg'
                className='img-fluid rounded'
                alt='Oats'
                style={{ maxHeight: '300px' }} // optional max height for larger screens
            />
        </div>
    </div>
</div>

            
        </>
    )
}
export default Aboutus