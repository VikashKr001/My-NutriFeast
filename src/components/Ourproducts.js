import React from "react";
function Ourproduct(props)
{   
      function handleclick(sectionName)
      {
         props.handleclick(sectionName)
      }
      
    return(
        <>
       
       <div className="container myborder mt-1">
                <div className="row align-items-center">
                    <div className="col-12 col-md-4 text-center">
                        <img 
                            src='/images/logo.jpg' 
                            alt='Logo' 
                            className="img-fluid" 
                        />
                    </div>
                    <div className='col-12 col-md-8 text-center text-md-left'>
                        <h1>My Nutrifeast</h1>
                        <h5>Now Healthy Can Be Tasty</h5>
                        <h3>Savor the Goodness of Dry Fruits</h3>
                        <div className="mt-3">
                            <button className='btn btn-primary m-1 btn_border' onClick={()=>handleclick("Homepage")} >Back To Home</button>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-1">
    <div className="row">
        <div className="col-12 col-md-8 d-flex justify-content-center justify-content-md-start mb-3">
            <div>
                <h1>Simple, Tasty, Nutritious</h1>
                <p>
                    We are dedicated to crafting delicious, homemade products using the finest dry fruits, carefully selected for their nutritional benefits and rich flavors. Our homemade offerings are perfect for those who value quality and taste, providing you with wholesome options to fuel your day. Each product is thoughtfully prepared with love and care, ensuring that you enjoy the natural goodness without any additives or preservatives. Whether you’re looking for a quick snack, a nutritious breakfast, or ingredients to enhance your meals, My Nutrifeast has something special for everyone.
                </p>
                <h4>Get your different flavors of Oats Jar and enjoy your nutritious and delicious oats meal!</h4>
              
                <div className="container  btn-group">
                    <div className="row">
                        <div className="col-12">
                        <button className='btn btn-primary m-1 btn_border ' onClick={() => handleclick("ourstore")}>Show Now</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end mb-3">
            <img
                src='images/Ourproduct1.jpg'
                className='img-fluid rounded'
                alt='Oats'
                style={{ maxHeight: '300px' }} // optional max height for better control
            />
        </div>
    </div>
</div>

            <div className="container mt-1 ">
    <div className="row">
        <div className="col-12 text-center">
            <h2>Our Different Flavors of Oats Jar as Follows:</h2>
        </div>

        <div className="col-12 col-md-4 mt-2 d-flex justify-content-center">
            <img
                src="/images/Ourproduct2.jpg"
                alt=""
                className="rounded img-fluid"
            />
        </div>

        <div className="col-12 col-md-8 mt-2">
            <h3>Saffron and Cardamom</h3>
            <h5>केशर आणि वेलची</h5>
            <p>
                Elevate your morning with our Saffron Cardamom Instant Oatmeal, packed with the rich flavors of Saffron and Cardamom plus the nuttiness of pistachios, almonds, and cashews. It's a royal treat for your taste buds. Start your day like a King!
            </p>
            <h5>Saffron</h5>
            <p>
                Saffron is a powerful antioxidant known for its mood-boosting properties. It may help improve mood, enhance memory, and provide anti-inflammatory benefits.
            </p>
            <h5>Cardamom</h5>
            <p>
                Cardamom is rich in essential oils that can help with digestion and may even have antimicrobial properties. It can also support heart health and regulate blood pressure.
            </p>
        </div>

        <div className="col-12 mt-3">
            <p>
                Indulge in our Saffron and Cardamom Flavored Oats Jar, a delicious and nutritious blend crafted for your wellness. This jar combines the heart-healthy benefits of oats with the omega-3 richness of chia and flaxseed powder. Sweetened naturally with brown sugar and enriched with makhana (fox nuts) for a crunchy texture, it also features nutrient-dense kale munuk and energy-boosting dates. The inclusion of muesli (made with jaggery and oats), cashews, pistachios, and almonds provides a delightful mix of healthy fats, fiber, and essential vitamins. Enjoy this wholesome treat as a fulfilling breakfast or a satisfying snack that fuels your day and supports your overall health!
            </p>
        </div>
    </div>
</div>

<div className="container mt-3">
    <div className="row">
        <div className="col-12 col-md-8">
            <h3>Super Seeds and Dates</h3>
            <p>
                Start your day with our Super Seeds and Dates Instant Oatmeal packed with chia, flax, sunflower, pumpkin, and watermelon seeds. This nutritious blend is loaded with protein and fiber, sweetened naturally with dates. It satisfies your cravings while keeping breakfast healthy and delicious. Indulge in the rich flavors and enjoy a scrumptious meal that powers your morning.
            </p>
            <h5>Sunflower Seeds</h5>
            <p>
                Rich in vitamin E, magnesium, and healthy fats, they support heart health and boost immunity.
            </p>
            <h5>Pumpkin Seeds</h5>
            <p>
                Packed with antioxidants, magnesium, and zinc, they promote heart health and prostate support.
            </p>
            <h5>Watermelon Seeds</h5>
            <p>
                High in protein and healthy fats, they aid digestion and help maintain hydration. Incorporating these seeds into your diet offers a delicious way to enhance your nutrition!
            </p>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end mb-3">
            <img
                src="/images/Ourproduct4.jpg"
                alt=""
                className="rounded img-fluid"
                style={{ maxHeight: '300px' }} // Optional: limit height for larger screens
            />
        </div>
        <div className="col-12 mt-1">
            <p>
                Discover the Super Seeds and Dates Oats Jar by MyNutrifeast, a nutritious blend designed to energize your day! This jar combines oats for heart-healthy fiber with makhana (fox nuts) for a satisfying crunch. Our muesli (made with jaggery and oats) adds natural sweetness, while chia and flaxseed powders provide omega-3 fatty acids for anti-inflammatory benefits. The inclusion of brown sugar offers a touch of sweetness, complemented by kharik powder (dry dates) and dates for a natural energy boost. Rich in sunflower, pumpkin, and watermelon seeds, this mix provides essential nutrients, healthy fats, and antioxidants, promoting overall wellness. Incorporating this jar into your diet supports digestion, boosts immunity, and keeps you feeling full and energized. Enjoy a delicious, healthy snack or breakfast from MyNutrifeast that nourishes your body and delights your taste buds!
            </p>
        </div>
    </div>
</div>

<div className="container mt-3">
    <div className="row">
        <div className="col-12 col-md-4 d-flex justify-content-center mb-3">
            <img
                src="/images/Ourproduct5.jpg"
                alt=""
                className="rounded img-fluid"
                style={{ maxHeight: '300px' }} // Optional: limit height for larger screens
            />
        </div>
        <div className="col-12 col-md-8">
            <h3>Chocolate and Coconut</h3>
            <p>
                Indulge in our Chocolate Coconut Instant Oatmeal where decadence meets nutrition! This delicious blend of oats, makhana, dry fruits, seeds, and exotic spices is perfect for breakfast or a healthy dessert, with rich cacao powder adding a delightful flavor. Enjoy chocolate without guilt! It's a hassle-free, kid-friendly meal that everyone will love. Start your day in a tasty way.
            </p>
            <h5>Chocolate</h5>
            <p>
                Rich in healthy fats, especially medium-chain triglycerides (MCTs), it provides quick energy and may aid in weight management. It’s packed with antioxidants for oxidative stress reduction and high in fiber for digestive health. Chocolate also supports heart health, hydrates through coconut water, and enhances skin health with its anti-inflammatory properties, making it a nutritious addition to your diet.
            </p>
        </div>
        <div className="col-12 mt-2">
            <p>
                Introducing the Chocolate Coconut Flavor Oats Jar by MyNutrifeast—a delicious and nutritious blend that makes healthy eating enjoyable! This jar features simple oats, brown oats, and makhana (fox nuts), combined with muesli (oats + jaggery) for natural sweetness. Packed with chia powder, flaxseed powder, and coconut powder, it offers essential nutrients and fiber. The addition of kharik powder (dry dates), seedless dates, and brown sugar enhances the flavor, while cocoa powder and choco chips provide a delightful chocolatey taste that kids will love. Rich in healthy fats from cashews, almonds, and pistachios, this jar supports growth and development. Enjoy a tasty, healthy treat that’s highly recommended for children—because eating healthy can be delicious!
            </p>
        </div>
    </div>
</div>

<div className="container mt-3">
    <div className="row">
        <div className="col-12 col-md-3 d-flex justify-content-center mb-3">
            <img
                src="/images/Ourproduct6.jpeg"
                alt=""
                className="rounded img-fluid"
                style={{ maxHeight: '300px' }} // Optional: limit height for larger screens
            />
        </div>
        <div className="col-12 col-md-9">
            <h2>Join MyNutrifeast!</h2>
            <p>
                Explore our wide range of delicious and healthy Oats Jar flavors at MyNutrifeast! We are continuously developing new, tasty options that nourish your body and satisfy your cravings. Join us and enjoy nutritious meals that fit seamlessly into your fast-paced lifestyle. Experience the perfect blend of health and flavor—your journey to healthier eating starts here!
            </p>
            <a
                href="https://www.instagram.com/mynutrifeast/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'red' }}
            >
                Click here to join us on Instagram
            </a>
        </div>
    </div>
</div>

        </>
    )
}
export default Ourproduct;