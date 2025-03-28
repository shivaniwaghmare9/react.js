
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

import Cybrom from "./Cybrom";
import Data from "./Data";
import Footer from "./Footer";
import Header from "./Header";
const App=()=>{
     return(
      <>
         <p>Welcome to react</p>
        <Cybrom/>
        <Header/>
        <Data />
        <Footer/>
        
      </>
     )
  }
   export default App;
