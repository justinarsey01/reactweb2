import Aboutus from "./Components/Aboutus/Aboutus";    
import Header from "./Components/Header/Header";
import Services from "./Components/Services/services";
import Slide from "./Components/Slide/Slide";
import Products from "./Components/Products/Products";
import Portofolio from "./Components/Portofolio/Portofolio";
import Contactus from "./Components/Contactus/Contactus";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import Footer2 from "./Components/Footer2/Footer2";
{
  /* welcome*/
}
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
const Myhome=()=>{
  document.title="MyTech| Home";
  return (
    <div>
      
      <Slide/>
      <Aboutus/>
      <Services/>
      <Products/>
      <Portofolio/>
      <Contactus/>
      <Newsletter/> 
      </div>
  )
}
const Missout =()=>{
  return(
  <div className="container-fluid">
    <div className="container">
      <div className="row">
        <div className="col-12 my404 pt-5">
          <h2>
            404 Page Not Found
          </h2>
        </div>
      </div>
    </div>
  </div>
  )
}


function App() {
  

  return (
    <>
      <Router>
        <Header />
      <Routes>
        <Route exact Index element={<Outlet/>}/>
        <Route exact path='/reactweb2' element={<Myhome/>}/>
        <Route exact path='/Slide' element={<Slide/>}/>
        <Route exact path='/Aboutus' element={<Aboutus/>}/>
        <Route exact path='/Services' element={<Services/>}/>
        <Route exact path='/Products' element={<Products/>}/>
        <Route exact path='/Portofolio' element={<Portofolio/>}/>
        <Route exact path='/Contactus' element={<Contactus/>}/>
        <Route exact path='/Newsletter' element={<Newsletter/>}/>
        <Route exact path='*' element={<Missout/>}/>
        <Route/>
      </Routes>
      <Footer/>
      <Footer2/>
      </Router>
    </>
  )
}

export default App;
