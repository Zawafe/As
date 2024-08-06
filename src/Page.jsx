// function Page() {


//     return (
//         <header>
//             <h1 className="ab">collection</h1><hr />
//             <div >
//                 <div className="ta">
//                     <h1>2 Ports</h1> <br /> <br />
//                     <p>Stay powered up with Anker Philippines' 2 Ports Collection. Designed for convenience and efficiency, our dual-port chargers ensure you can charge two devices simultaneously without compromising on speed. Whether you're at home, in the office, or on the go, experience seamless charging with Anker's trusted technology. Choose reliability, choose Anker.</p>
//                 </div>
//                 <br />

//             </div>
//             {/* <div className="ta2">
//                 <p className="ta1">Filters</p> <br /> <hr /> <br />


//                 <div className="ta3"> 
//                    <p className="ta4">Devices   </p>
//                     <p className="ta4"> ⇩</p>
//                 </div>
//                 <input type="checkbox" />  For Laptop <br /> <br />
//                 <input type="checkbox" /> For Phones <br /><br />
//                 <input type="checkbox" /> For Tablets <br /><br />


//                 <div className="ta3"> 
//                    <p className="ta4">Devices   </p>
//                     <p className="ta4"> ⇩</p>
//                 </div>
//                 <input type="checkbox" />  For Laptop <br /> <br />
//                 <input type="checkbox" /> For Phones <br /><br />
//                 <input type="checkbox" /> For Tablets <br /><br />

//                 <div className="ta3"> 
//                    <p className="ta4">Devices   </p>
//                     <p className="ta4"> ⇩</p>
//                 </div>
//                 <input type="checkbox" />  For Laptop <br /> <br />
//                 <input type="checkbox" /> For Phones <br /><br />
//                 <input type="checkbox" /> For Tablets <br /><br />

//                 <div className="ta3"> 
//                    <p className="ta4">Devices   </p>
//                     <p className="ta4"> ⇩</p>
//                 </div>
//                 <input type="checkbox" />  For Laptop <br /> <br />
//                 <input type="checkbox" /> For Phones <br /><br />
//                 <input type="checkbox" /> For Tablets <br /><br />

//                 <div className="ta3"> 
//                    <p className="ta4">Devices   </p>
//                     <p className="ta4"> ⇩</p>
//                 </div>
//                 <input type="checkbox" />  For Laptop <br /> <br />
//                 <input type="checkbox" /> For Phones <br /><br />
//                 <input type="checkbox" /> For Tablets <br /><br />

//                 <div className="ta3"> 
//                    <p className="ta4">Devices   </p>
//                     <p className="ta4"> ⇩</p>
//                 </div>
//                 <input type="checkbox" />  For Laptop <br /> <br />
//                 <input type="checkbox" /> For Phones <br /><br />
//                 <input type="checkbox" /> For Tablets <br /><br />

//                 <div className="ta3"> 
//                    <p className="ta4">Devices   </p>
//                     <p className="ta4"> ⇩</p>
//                 </div>
//                 <input type="checkbox" />  For Laptop <br /> <br />
//                 <input type="checkbox" /> For Phones <br /><br />
//                 <input type="checkbox" /> For Tablets <br /><br />



//             </div> */}
//               <div class="container">
//         <div class="left">
//             <div class="filters">
//                 <h2>Filters</h2>

//             </div>
//         </div>
//         <div class="right">
//             <div class="products">
//                 <h2>Products</h2>

//                 <div class="product">
//                     <img src="path_to_image.jpg" alt="Product Image"></img>
//                     <div>
//                         <h3>Product Name</h3>
//                         <p>₱2,095.00</p>
//                     </div>
//                 </div>
//                 <div class="product">
//                     <img src="path_to_image.jpg" alt="Product Image"></img>
//                     <div>
//                         <h3>Product Name</h3>
//                         <p>₱1,165.00</p>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     </div>

//             <br />
//         </header>
//     )

// }

// export default Page

import pic1 from './assets/man.webp'

import React, { useState } from 'react';


const Page = () => {
    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    return (

        <jk>
            <h1 className="ab" >collection</h1><hr />
            <div >
                <div className="ta">
                    <h1>2 Ports</h1> <br /> <br />
                    <p>Stay powered up with Anker Philippines' 2 Ports Collection. Designed for convenience and efficiency, our dual-port chargers ensure you can charge two devices simultaneously without compromising on speed. Whether you're at home, in the office, or on the go, experience seamless charging with Anker's trusted technology. Choose reliability, choose Anker.</p>
                </div>
                <br />
            </div>
            <div className="container">

                <div className="left">
                    {/* <div className="filter-buttons">
                        <button onClick={toggleFilters}>
                            {showFilters ? 'Hide Filters' : 'Show Filters'}
                        </button>
                        <button> Button</button>
                    </div> */}
                    <div className={`filters ${showFilters ? '' : 'hidden'}`}>
                        <h2>Filters</h2>
                        {<h1> fawaz</h1>}
                    </div>
                    <div className="content">
                        <h2>Filters</h2>
                        <hr />
                        <div className='l1'>
                            <p>Devices</p>
                            <p><b>⬇︎ </b></p>
                        </div>
                        <input type="radio" name='device' /> For Laptop <br />
                        <input type="radio" name='device' /> For Phones <br />
                        <input type="radio" name='device' /> For Tablets<br />
                        <div className='l1'>
                            <p>Devices</p>
                            <p><b>⬇︎ </b></p>
                        </div>
                        <input type="radio" name='device' /> For Laptop <br />
                        <input type="radio" name='device' /> For Phones <br />

                        <div className='l1'>
                            <p>Devices</p>
                            <p><b>⬇︎ </b></p>
                        </div>

                        <input type="radio" name='device' /> For Phones <br />
                        <input type="radio" name='device' /> For Tablets<br />

                        <div className='l1'>
                            <p>Devices</p>
                            <p><b>⬇︎ </b></p>
                        </div>

                        <input type="radio" name='device' /> For Tablets<br />
                        <div className='l1'>
                            <p>Devices</p>
                            <p><b>⬇︎ </b></p>
                        </div>
                        <input type="radio" name='device' /> For Laptop <br />
                        <input type="radio" name='device' /> For Phones <br />
                        <input type="radio" name='device' /> For Phones <br />
                        <input type="radio" name='device' /> For Tablets<br />
                        <div className='l1'>
                            <p>Devices</p>
                            <p><b>⬇︎ </b></p>
                        </div>

                        <input type="radio" name='device' /> For Tablets<br />
                        <div className='l1'>
                            <p>Devices</p>
                            <p><b>⬇︎ </b></p>
                        </div>

                        <input type="radio" name='device' /> For Tablets<br />

                    </div>

                </div>
                <div className="right">
                    <div className="products">
                        <h2>Products</h2>
                        <div className="product-list">
                            <div className="product">
                                <p>$304.00</p>
                                <img src={pic1} alt="Product" />

                                <div className="product-buttons">
                                <button>Pay later</button>
                                <button>Buy now</button>
                                </div>
                            </div>
                            <div className="product">
                            <p>$234.94</p>
                                <img src={pic1} alt="Product" />
                                <div className="product-buttons">
                                <button>Pay later</button>
                                <button>Buy now</button>
                                </div>
                            </div>
                            <div className="product">
                            <p>$68.70</p>
                                <img src={pic1} alt="Product" />
                                <div className="product-buttons">
                                <button>Pay later</button>
                                <button>Buy now</button>
                                </div>
                            </div>
                            <div className="product">
                            <p>192.75</p>
                                <img src={pic1} alt="Product" />
                                <div className="product-buttons">
                                    <button>Pay later</button>
                                    <button>Buy now</button>
                                </div>
                            </div>
                            <div className="product">
                                <p>$34.75</p>
                                <img src={pic1} alt="Product" />

                                <div className="product-buttons">
                                <button>Pay later</button>
                                <button>Buy now</button>
                                </div>
                            </div>
                            <a href="pci">
                            <div className="product">
                                <p>$34.75</p>
                                <img src={pic1} alt="Product" />

                                <div className="product-buttons">
                                <button>Pay later</button>
                                <button>Buy now</button>
                                </div>
                            </div>
                            </a>
                           
                            {/* Add more products similarly */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='yu'>
                <h3 className='yu1'>Join Our Community for Exclusive Savings!</h3>
                <h2 className='yu2'>Get an Exclusive 10% Off Your First Purchase</h2>
                <br /><br /><center>
                  <div class="search-container">
                    <input type="text" placeholder="Enter your email to get a gift" class="search-input" />
                    <button class="search-button">Subscribe Now</button>
                  </div>
                </center> <br />
                <center>
                <input type="checkbox" /> I agree to the Terms of <a href="#">Services</a> and <a href="#">Privacy Policy</a>.
               
                </center>
                
            </div>
        </jk>




    );
};

export default Page;

