import "./Footer.css";
import img3 from "/src/assets/img3.jpg";
import { BsBell } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";





function Footer (){
    return(
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 mt-3 urem">
                        <img src={img3}class="rounded-circle width-200px"></img>
                                    <p>
              1 Nnamani Street Trans-Ekulu 
              Enugu-East LGA 
              Enugu State 
              Nigeria
            </p>
            <p>
              <b>Email:</b> Support@nuellafashion.com
            </p>
                    </div> 
         <div class="col-md-6 col-md-6 col-lg-3 mt-3 myfoot">
        <h6> Company</h6>
        <ul>
          <li><BsChevronCompactRight /> <a href="index.html">Home</a></li>
          <li><BsChevronCompactRight /><a href="#">About Us</a></li>
          <li><BsChevronCompactRight /><a href="#">About Us</a></li>
          <li><BsChevronCompactRight /><a href="#">Career</a></li>
          <li><BsChevronCompactRight /><a href="#">Disclaimer</a></li>
          <li><BsChevronCompactRight /><a href="#">Terms and Condition</a></li>
          <li><BsChevronCompactRight /><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
        <div class="col-md-6 col-md-6 col-lg-3 mt-3 myfoot">
        <h6> Company</h6>
        <ul>
          <li><BsChevronCompactRight /><a href="index.html">Home</a></li>
          <li><BsChevronCompactRight /><a href="#">About Us</a></li>
          <li><BsChevronCompactRight /><a href="#">Career</a></li>
          <li><BsChevronCompactRight /><a href="#">Disclaimer</a></li>
          <li><BsChevronCompactRight /><a href="#">Terms and Condition</a></li>
          <li><BsChevronCompactRight /><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
        <div class="col-md-6 col-md-6 col-lg-3 mt-3 myfoot">
        <h6> Company</h6>
        <ul>
          <li><BsChevronCompactRight /><a href="#">Home</a></li>
          <li><BsChevronCompactRight /><a href="#">About Us</a></li>
          <li><BsChevronCompactRight /><a href="#">Career</a></li>
          <li><BsChevronCompactRight /><a href="#">Disclaimer</a></li>
          <li><BsChevronCompactRight /><a href="#">Terms and Condition</a></li>
          <li><BsChevronCompactRight /><a href="#">Privacy Policy</a></li>
        </ul>
      </div>


                </div>
            </div>

        </div>
    )
}

export default Footer;