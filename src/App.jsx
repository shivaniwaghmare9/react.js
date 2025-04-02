
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
const App=()=>{
   return(
      <>
      <div style={{border:"1px solid black",width:"350px" ,height:"160px",background:"yellow",borderRadius:"20px",marginLeft:"35%"}}>
         <div style={{border:"1px solid black",width:"300px" ,height:"120px",background:"red",borderRadius:"20px",margin:"20px"}}>
            <div style={{border:"1px solid black",width:"250px" ,height:"60px",background:"blue",borderRadius:"10px",margin:"26px",textAlign:"center",lineHeight:"4",marginLeft:"26px",color:"white",fontFamily:"cursive"}}>
               CYBROM
            </div>
         </div>
      </div>
      </>
   )

}
export default App;
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