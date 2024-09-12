
import pic1 from './assets/Sound.png'
import pic2 from './assets/pic1.avif'
import pic3 from './assets/Group.avif'
import pic4 from './assets/anker.avif'

function Footer() {
    return (
        <footer>
            

            <div className="a3">
                <div className="a2">
                    <div> <a href="#">About</a> <br></br> Anker is the global leader in charging technology. <br></br>This includes wireless charging, car charging,<br></br> and our best-selling portable and wall chargers.<br></br> </div> <br />
                    <div> <a href="#">ENJOY THE ANKER ADVANTAGE</a>  <br />  <g> <a href="#">Lightning-Fast Delivery</a></g><br /> <g> <a href="#">Always-On Support</a></g> <br />  <g> <a href="#">Worry-Free Warranty</a></g><br />  <g><a href="#">Flexible Payment Plans</a></g></div> <br />
                    <div> <a href="#">PRODUCTS</a> <br /> <g> <a href="#">AC Power</a></g> <br /> <g><a href="#">Cables</a></g><br />  <g><a href="#">Chargers</a></g><br /> <g><a href="#">Hubs and Docks</a></g> <br />  <g> <a href="#">Power Banks</a></g><br />  <g> <a href="#">Power Stations</a></g><br /> <g> <a href="#">Wireless Chargers</a></g></div>
                    <div><a href="#"> SUPPORT</a> <br /> <g> <a href="#">Terms and Conditions</a> </g><br /> <g>Privacy Policy</g><br /> <g>Refund Policy</g><br />
                        <g>  <a href="">Warranty Policy</a>  </g> <br />
                        <g> <a href="#">Payment and Delivery</a> </g>  <br />
                        <g><a href="#">Shipping Policy</a> </g>  <br />
                        <g><a href="#">Terms of Service</a></g>
                    </div>
                </div><br /> <br />

                <br /> <br />
                <div className="a1">
                    <a href="£"><div>DISCOVER <br />About Us <br />Retail Stores <br /> Contact Us</div> <br /></a>
                    <div>PROGRAM<br />Blog<br />Corporate Program</div> <br />
                    <div>CONTACT US<br />Email: shopanker@gocommerce.asia</div> <br />
                    <div><h4>social</h4></div>
                </div>
            </div>

            <div className="ba">


                <div className='bn'>
                    <img src={pic4} className='ft1'></img>
                    <img src={pic1} className='ft1' ></img>
                    <img src={pic3} className='ft1'></img>
                    <img src={pic2} className='ft1'></img>

                </div>
                <p className="bb"> © Copyright 2024 All Rights Reserved by Anker</p>
            </div>


        </footer>
    )
}
export default Footer