import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imgi from "/src/assets/imgi.jpg";
import "./Products.css"
import {motion} from "framer-motion";

function Products (){
    return(
        <div>
            
            <div className="container">
            <span>PRODUCTS</span>
            <p class="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, 
  natus! Aspernatur voluptates deleniti architecto, nisi illum temporibus
   numquam, quos voluptate, excepturi consequuntur pariatur veritatis porro
    dolorem. Obcaecati quae cupiditate sit!</p>
    <motion.div className="row">
    <motion.div
    initial={{opacity:0, scale:0}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:1}}
     className='col-sm-12 col-md-6 col-lg-4 mt-3'>
     <Card style={{ width: 'auto' }}>
       <img src={imgi}></img>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </motion.div>
    <motion.div 
    initial={{opacity:0, scale:0}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:2}}
    className='col-sm-12 col-md-6 col-lg-4 mt-3'>
     <Card style={{ width: 'auto' }}>
       <img src={imgi}></img>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </motion.div>
    <motion.div 
    initial={{opacity:0, scale:0}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:1}}
    className='col-sm-12 col-md-6 col-lg-4 mt-3'>
     <Card style={{ width: 'auto' }}>
       <img src={imgi}></img>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </motion.div>
    </motion.div>
       </div>
    </div>
    )
}

export default Products;