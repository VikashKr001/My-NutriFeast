import React ,{useRef}from 'react';


function Homepage(props) {
    function handleclick(sectionName) {
        props.handleclick(sectionName);
        
       
    }
     
    return (
        <>              <div className="container myborder mt-1 ">
                <div className="row align-items-center">
                    <div className="col-12 col-md-4 text-center">
                        <img 
                            src='/images/logo.jpg' 
                            alt='Logo' 
                            className="img-fluid" 
                        />
                    </div>
                    <div className='col-12 col-md-8 text-center text-md-left '>
                        <h1>My Nutrifeast</h1>
                        <h5>Now Healthy Can Be Tasty</h5>
                        <h3>Savor the Goodness of Dry Fruits</h3>
                        <div className="mt-3">
                            <button className='btn btn-primary m-1 btn_border' onClick={() => handleclick("ourproduct")}>Our Products</button>
                            <button className='btn btn-secondary m-1 btn_border' onClick={() => handleclick("ourstore")}>Our Store</button>
                            <button className='btn btn-info m-1 btn_border' onClick={() => handleclick("Aboutus")}>About Us</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-1'>
                <div className='row'>
                    <div className='col-12 col-md-8'>
                        <h1>Welcome to My Nutrifeast</h1>
                        <h3>Fuel Your Day the Healthy Way!</h3>
                        <p>
                            At My Nutrifeast, we believe nutritious breakfast is the cornerstone of 
                            a successful day, especially for fitness enthusiasts. Our delicious and wholesome
                             breakfast options are crafted from the finest dry fruits and high-protein ingredients,
                              designed to give you the energy and nutrients you need to power through your workouts 
                              and stay active. Nutrition is the only remedy that can bring full recovery and can be 
                              used with any treatment. Remember, food is our best medicine!
                        </p>

                        <div className='row mt-4 align-items-center'>
                            <div className='col-12 col-md-4 d-flex justify-content-center justify-content-md-start'>
                                <img
                                    src='images/Homepage2.jpg'
                                    className='img-fluid rounded'
                                    alt='Oats'
                                />
                            </div>
                            <div className='col-12 col-md-8 d-flex justify-content-start justify-content-lg-start'>
                                <div >
                                    <h3>Don’t Wait! Hurry Up!</h3>
                                    <h5>Get your different flavours of Oats jar and enjoy your nutritious and delicious Oats meal</h5>
                                    <div className='container btn-group'>
                                   <div className='row'>
                                    <div className='col-12'>
                                    <button className='btn btn-info m-1 d-flex justify-content-md-center btn_border' onClick={() => handleclick("ourstore")}>Shop Now</button>
                                    </div>

                                   </div>
                                   </div>
                                </div>
                            </div>
                        </div>

                        <p>
                            Savoring the goodness of dry fruits means incorporating these nutritious powerhouses into your daily routine. Whether you enjoy them as a snack, add them to your meals, or use them in recipes, dry fruits offer a delicious way to boost your health and energy levels. Embrace the natural benefits and flavors of dry fruits today!
                        </p>
                    </div>

                    <div className='col-12 col-md-4 d-flex justify-content-center justify-content-md-end'>
                        <img
                            src='/images/Homepage1.jpg' 
                            alt='Healthy Ingredients' 
                            className="img-fluid rounded-lg"    
                        />
                    </div>
                </div>
            </div>

            <div className='container mt-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Why Choose My Nutrifeast..?</h1> 
                        <h5>1. All-Natural Ingredients</h5>
                        <p>We prioritize your health by using only natural ingredients, free from harmful chemicals and additives.</p>
                        <h5>2. High in Protein</h5>
                        <p>Our meals are specially formulated to support muscle recovery and growth, making them perfect for gym-goers and active individuals.</p>
                        <h5>3. Delicious & Convenient</h5>
                        <p>Enjoy the rich flavors of nature with our easy-to-prepare meals that fit seamlessly into your busy lifestyle.</p>
                    </div>
                </div>
            </div>

            <div className='container'>
    <div className='row align-items-center'>
        <div className='col-12  justify-content-lg-start col-md-4 d-flex justify-content-center '>
            <img
                src='/images/Homepage3.jpg' 
                alt='Healthy Ingredients' 
                className="img-fluid rounded-lg"    
            />
        </div>
        <div className='col-12 col-md-8 justify-content-lg-start  text-md-left'>
            <h3>Join the My Nutrifeast Community:</h3>
            <p>Elevate your breakfast game and embrace a healthier lifestyle with My Nutrifeast. Explore our range of products today and discover how delicious healthy eating can be!</p>
            <h3>Start Your Journey</h3>
           <div className='container  btn-group '>
            <div className='row'>
                <div className='col-12'>
                <button className='btn btn-info m-1 btn_border' onClick={() => handleclick("ourstore")}>Shop Now</button>
                <button className='btn btn-info m-1 btn_border' onClick={() => handleclick("ourproduct")}>Our products</button>

                </div>

            </div>
            
            </div>
        </div>
    </div>
</div>

        </>
    );
}

export default Homepage;
