
// const name="shivani"
// const age=11
// const salary=35000




// const App=()=>{
//   return(
//     <p>Welcome to react i am {name} my age is {age*2} my salary {salary*3}</p>
//   )
// }
// export default App;

// const subject=<ul>
//          <li>PHp</li>
//          <li>Oracle</li>
//          <li>java</li>
//          <li>sql</li>
// </ul>

// const App=()=>{
//   return(
//     <h1>My Subject:{subject}</h1>
//   )
// }
// export default App;

//===========================================one top level  element==================================================== 
// const App=()=>{
//   return(
//     <>
//     <h1>welcome to react</h1>
//     <h1> we learn java</h1>
//     <p>i am developer</p>
//     </>
//   )
// }
// export default App;

// const App=()=>{
//   return(
//     <>
//     Enter name:<input type="text"  />
//     <br />
//     <br />
//     Enter city:<input type="text"  />
//     <br />
//     <br />
//     Enter course:<input type="text"  />

//     </>
//   )
// }
// export default App;

// import Cybrom from "./Cybrom";
// import Data from "./Data";
// import Footer from "./Footer";
// import Header from "./Header";
// const App=()=>{
//      return(
//       <>
//          <p>Welcome to react</p>
//         <Cybrom/>
//         <Header/>
//         <Data />
//         <Footer/>
        
//       </>
//      )
//   }
//    export default App;

// const App=()=>{
//    return(
//       <>
//         <h1 style={{color:"red",fontFamily:"arial",textDecoration:"underline"}}>Welcome to React Classes!!!</h1>
//       </>
//    )
// }
// export default App;
//====================================================inline css================================================================
// const App=()=>{
//    return(
//       <>
//       <div style={{border:"1px solid black",width:"350px" ,height:"160px",background:"yellow",borderRadius:"20px",marginLeft:"35%"}}>
//          <div style={{border:"1px solid black",width:"300px" ,height:"120px",background:"red",borderRadius:"20px",margin:"20px"}}>
//             <div style={{border:"1px solid black",width:"250px" ,height:"60px",background:"blue",borderRadius:"10px",margin:"26px",textAlign:"center",lineHeight:"4",marginLeft:"26px",color:"white",fontFamily:"cursive"}}>
//                CYBROM
//             </div>
//          </div>
//       </div>
//       </>
//    )

// }
// export default App;
//=========================================inline css form object============================================================================================
// const data={
//    color:"red",
//    textDecoration:"underline",
//    fontsize:"40px"
// }

// const App=()=>{
//    return(
//       <>
//       <h1 style={data}>Welcome To React!!!</h1>
      
//       </>
//    )
// }
// export default App;

//=========================================inline css form css file import main.jsx============================================================================================
// import Cybrom from "./Cybrom";
// import Data from "./Data";

// const App=()=>{
//    return(
//       <>
//       <h1 className="data">Welcome To React!!!</h1>
//       <Cybrom/>
//       <Data/>
//       </>
//    )
// }
// export default App;

//========================================03-04-2025==========================================================================================

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Carousel from 'react-bootstrap/Carousel';
import img1 from "./images/download.jpg";
import img2 from "./images/download (1).jpg";
import img3 from "./images/download (2).jpg";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const App=()=>{
   return(
      <>
      <h1>Welcome To React!!!</h1>
      <hr />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Carousel>
      <Carousel.Item>
         <img src={img1} width="100%" height="400px"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2}  width="100%" height="400px"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3}  width="100%" height="400px"/> 
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    <div id="mycard">

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3} />
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

    <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>

    <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
      
      
      </>
   )
}
export default App;
