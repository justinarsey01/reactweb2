import "./Aboutus.css";
import {motion} from "framer-motion";


function Aboutus (){
    return(
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="rgb(32, 103, 211)" fillOpacity="1" d="M0,128L26.7,
  128C53.3,128,107,128,160,133.3C213.3,139,267,149,320,133.3C373.3,117,427,75,480,64C533.3,53,587,75,640,
  80C693.3,85,747,75,800,85.3C853.3,96,907,128,960,133.3C1013.3,139,1067,117,1120,112C1173.3,107,1227,117,
  1280,128C1333.3,139,1387,149,1413,154.7L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,
  1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,
  320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg> 
            <section class="container">
    <div class="row">
      <span>About Us</span>
      <motion.div 
      initial={{opacity:0, scale:0}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:2}}
      class="col-sm-12 col-md-12 col-lg-5 mt-3 about">
        <p>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, porro?
           Necessitatibus sit eos impedit nulla aliquam tempora rerum, veritatis 
           deleniti beatae placeat ad quidem dolor maxime
            eum, repudiandae libero consectetur.
        </p>
        <ul>
          <li>Women Wears</li>
          <li>Men Wears</li>
          <li>Traditional Wears</li>
          <li>Fashion Designing</li>
          <li>Modelling</li>
          <li>Sewing Training</li>
          <li>Executive Wears</li>
          <li>Corporate Wears</li>
        </ul>
      </motion.div>
      <motion.div 
      initial={{opacity:0, scale:0}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:2}}
      class="col-sm-12 col-md-12 col-lg-7 mt-3 about">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique
          , ea quasi modi quisquam molestias laboriosam. 
          Sapiente sit dolorum perferendis cupiditate ea amet 
          deserunt repellat. Possimus voluptatem illum voluptas sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ducimus 
          recusandae molestias perferendis qui maxime illo beatae nulla tenetur,
           nam ab a totam voluptate. Nulla, 
           molestias cupiditate! Natus, cupiditate ipsa?
        </p>
        <a href="#" class="btn">Learn More</a>
      </motion.div>
        
    </div>
  </section>

        </div>
    )
}

export default Aboutus;