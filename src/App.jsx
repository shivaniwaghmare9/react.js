
// const name="shivani"
// const age=11
// const salary=35000

import Cybrom from "./Cybrom";
import Data from "./Data";


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
//       <div style={{border:"1px solid black",width:"300px" ,height:"200px",background:"yellow",borderRadius:"10px"}}>
//          <div style={{border:"1px solid black",width:"200px" ,height:"130px",background:"red",borderRadius:"10px",margin:"40px"}}>
//             <div style={{border:"1px solid black",width:"100px" ,height:"50px",background:"blue",borderRadius:"10px",margin:"30px",textAlign:"center",lineHeight:"3",marginLeft:"50px"}}>
//                Cybrom
//             </div>
//          </div>
//       </div>
//       </>
//    )

// }
// export default App;
//=========================================inline css form object============================================================================================
// 

const App=()=>{
   return(
      <>
      <h1 className="data">Welcome To React!!!</h1>
      <Cybrom/>
      <Data/>
      </>
   )
}
export default App;