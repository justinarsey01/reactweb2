import "./Newsletter.css";

import {motion} from "framer-motion";


function Newsletter (){
    return(
        <div>
            <div className="container-fluid bg-tetiary">
            <span>NEWSLETTER</span>
            <p className="text-center">Lorem ipsuVoluptate , eveniet sequi suscipit
                 necessitatibus veniam labore totam quos ut omnis animi earum ducimus blanditiis nulla architecto 
                 repellendus. Harum, hic quos. Dolorum? </p>
             <div class="emeka">
              
                  <motion.div 
             initial={{opacity:0, scale:0}}
           whileInView={{opacity:1, scale:1}}
              transition={{duration:2}}
                   className=" col-12 d-flex justify-content-center py-5"  >
            <form action=""class="d-flex" method="post" enctype="multipart/form-data">
              <input type="email" class="form-control" name="email" placeholder="Enter Email"/>
              <button type="submit" class="btn" title="Subscibe" name="emaols">Subscribe</button> 
            </form>
          </motion.div>
          </div>
        </div>
        </div>
    )
}
export default Newsletter;