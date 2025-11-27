import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "/src/assets/img.jpg"; 
import "./Services.css";
function Services() {
  return (
    <div className='container-fluid bg-light'>
        <span>SERVICES</span>
        <p class="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Quos eligendi error voluptatem praesentium aut dolore
          </p>
     <div className='secbody'>
     <div className='row'>
    <div className='col-sm-12 col-md-6 col-lg-3 mt-3'>
      <Card style={{ width: 'auto' }}>
      <img src={img}className="caro"></img>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='col-sm-12 col-md-6 col-lg-3 mt-3'>
    <Card style={{ width: 'auto' }}>
      <img src={img}className="caro"></img>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='col-sm-12 col-md-6 col-lg-3 mt-3'>
     <Card style={{ width: 'auto' }}>
      <img src={img}className="caro"></img>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='col-sm-12 col-md-6 col-lg-3 mt-3'>
    <Card style={{ width: 'auto' }}>
      <img src={img}className="caro"></img>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>    
    </div>
    </div>
    </div>
    </div>
  );
}

export default Services;