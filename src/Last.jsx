import React, { useState } from 'react';
import profilepic from './assets/man.webp'
import profilepic2 from './assets/whitecharger.webp'
import profilepic3 from './assets/power.webp'
import last from './assets/last1.webp'

const Last = () => {
    const [activeTab, setActiveTab] = useState('description');
    return (
        <last>
            <div id='e'>
                <div id='e1'>
                    <img src={profilepic} alt="Image 2" id='b'></img> <br /> <br />
                    <img src={profilepic2} alt="Image 2" id='b'></img><br /> <br />
                    <img src={profilepic3} alt="Image 2" id='b'></img><br /> <br />
                    <img src={profilepic2} alt="Image 2" id='b'></img><br /> <br />
                </div>
                <div>
                    <img src={profilepic} alt="Image 2" id='c'></img>
                </div>
                <div id='h2'>
                    <h1>
                        Anker PowerCore 6310K PD <br /> Powerbank
                    </h1> <br /> <br />
                    <div id='d'>
                        <p>₱1,361.75</p> <br />
                        <p>₱2,095.00</p> <br /> <br />
                        <p id='d1'>SAVE 35%</p>
                    </div> <br />
                    <hr />
                    <p>Quantity:</p>
                    <div id='f'>
                        <p>-</p>
                        <p>1</p>
                        <p>+</p>
                    </div>
                    <button id='b1'>Add to cart</button> <br /> <br />
                    <p id='b3'>Buy it now</p> <br /> <br />
                    <button id='b2'>Add to Wishlist</button> <br /> <br /> <br />
                    <p>Checkout safely using your preferred payment method</p><br /> <br />
                    <div id='g'>
                        <p id='g1'>Verve</p>
                        <p id='g1'>VISA</p>
                        <p id='g1'>C.O.D</p>
                        <p id='g1'>Gcash</p>
                        <p id='g1'>maya</p>
                        <p id='g1'>JCB</p>
                        <p id='g1'>AMEX</p>
                    </div>
                </div> <br /> <br />

            </div>
            <div id='j'>
                <br /> <br />
                <div className="product-details">
                    <div className="tabs">
                        <div
                            className={`tab ${activeTab === 'description' ? 'active' : ''}`}
                            onClick={() => setActiveTab('description')}
                        >
                            Description
                        </div>
                        <div
                            className={`tab ${activeTab === 'specifications' ? 'active' : ''}`}
                            onClick={() => setActiveTab('specifications')}
                        >
                            Specifications
                        </div>
                        <div
                            className={`tab ${activeTab === 'notes' ? 'active' : ''}`}
                            onClick={() => setActiveTab('notes')}
                        >
                            Notes
                        </div>
                        
                    </div>
                    <hr /><br />
                    <div className={`tab-content ${activeTab === 'description' ? 'active' : ''}`} id="description">
                      <ul id='j2'>
                        <li>Charge Fast Anywhere: The 20W USB-C port has enough power to charge an iPhone 12 to 50% in just 30 minutes. Also equipped with a 12W USB port if you need to charge a second device. </li> <br />
                        <li>Super Slim: At only 0.6 inches thick, this 20W portable charger fits in any backpack, purse, or work bag. </li><br />
                        <li>Backup Power: The 10,000mAh cell capacity gives you enough power to charge an iPhone 13 more than once, a Samsung S20 more than one and a half times, and an iPad mini 5 once. </li> <br />
                        <li>Safe Travels: PowerCore 10K features our exclusive MultiProtect safety system which combines a fire-resistant casing, temperature control, and many more safety features so you can charge anywhere with no worries. </li> <br />
                        <li>What You Get: Anker 523 Power Bank (PowerCore 10K), USB-A to USB-C cable, USB-C to USB-C cable, welcome guide, our worry-free 18-month warranty, and friendly customer service.</li> <br />
                      </ul>
                        <br />




                    </div>
                    <div className={`tab-content ${activeTab === 'specifications' ? 'active' : ''}`} id="specifications">
                        <p> Product Dimensions: 5.89 x 2.7 x 0.57 inches</p> <br /> <br />
                        <p>Item Weight: 8.8 ounces</p>
                    </div>
                    <div className={`tab-content ${activeTab === 'notes' ? 'active' : ''}`} id="notes">
                        <ul>
                        <li>Charge Fast Anywhere: The 20W USB-C port has enough power to charge an iPhone 12 to 50% in just 30 minutes. Also equipped with a 12W USB port if you need to charge a second device. </li> <br />
                        <li>Super Slim: At only 0.6 inches thick, this 20W portable charger fits in any backpack, purse, or work bag. </li><br />
                        <li>Safe Travels: PowerCore 10K features our exclusive MultiProtect safety system which combines a fire-resistant casing, temperature control, and many more safety features so you can charge anywhere with no worries. </li> <br />
                        </ul>
                    </div>
                </div>

            </div>
            <div id='h1'>
                <div id='h3'>

                </div>
            </div>
            <div id='h4'>
                <img src={last} alt="" className='img6' />
                
            </div>
        </last>
    )

}
export default Last