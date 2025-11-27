import "./Contactus.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contactus (){
    
    return(
        <div>
          
            <div className="container-fluid">
                <span>CONTACT US</span>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Porro accusantium magni excepturi nihil delen
                    </p>
                    <div className="container">
                    <div class="row">
                    <div  className="col-sm-12 col-md-12 col-lg-5 cont1 ">
                        <h4><i class="fa-solid fa-location-dot"></i>  Location:</h4>
                         <p>Nnamani Street Trans Ekulu Enugu</p>
                        <h4><i class="fa-solid fa-location-dot"></i>Email:</h4>
                         <p>react@gmail.com</p>
                        <h4><i class="fa-solid fa-location-dot"></i> Call:</h4>
                         <p>09070140698</p>
                    </div>
                     
                    <div className="col-sm-12 col-md-12 col-lg-6 cont2 ">
                        <div className="row">
                            <div class="col-sm-12 col-md-12 col-lg-6 mt-1">
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" placeholder="Enter Email" id="email" className="form-control" />
                        </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 mt-1"> 
                            <label htmlFor="email">Phone Number:</label>
                            <input type="phone-number" name="phone-number" placeholder="Phone no.." id="phone number" className="form-control" />
                        </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 mt-1">
                            <label htmlFor="email">Phone Number:</label>
                            <input type="phone-number" name="phone-number" placeholder="Phone no.." id="phone number" className="form-control" />
                        </div>
                            <div class="col-sm-12 col-md-12 col-lg-6 mt-1">
                            <label htmlFor="address">Address:</label>
                            <input type="address" name="address" placeholder="Address" id="Address" className="form-control" />
                        </div>
                            
                            <div class="col-sm-12 col-md-12 col-lg-12 mt-1">
                            <label htmlFor="address">Message:</label>
                            <textarea type="text" name="address" placeholder="Enter message" id="Address" className="form-control" cols={7} rows={4}/>
                        </div>
                        <div class="col-12 mt-3 pb-3 text-center">
                        <button type="submit" title="Send Mesage" class=" btn btn-primary"> Send Message</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Contactus;