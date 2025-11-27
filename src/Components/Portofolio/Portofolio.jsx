import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img3 from '/src/assets/img3.jpg';
import {motion} from "framer-motion";

function Portofolio() {
  return (
    <div>
        <div className='container'>
            <span>PORTOFOLIO</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate iste 
                pariatur dicta quod quis</p>
                <div className='row'>
                     
                         <motion.div 
             initial={{opacity:0, scale:0}}
           whileInView={{opacity:1, scale:1}}
              transition={{duration:1}}
                    className='col-sm-12 col-md-6 col-lg-4 mt-3'>
                    <Card style={{ width: 'auto' }}>
                    <img src={img3}></img> 
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
                    <img src={img3}></img> 
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
                    <img src={img3}></img> 
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
                    <img src={img3}></img> 
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
                    <img src={img3}></img> 
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
                    <img src={img3}></img> 
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
               </div>
        </div>
    </div>
  );
}

export default Portofolio;