// import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import MyJson from './MyJson';
import PostList from './PostList';
import BigJson from './BigJson'
import SocialMedia from './SocialMedia';
import SkillsEx2 from './SkillsEx2';
import Exp from './Exp';
 const bigJson = BigJson;
// let SocialMedias = BigJson.SocialMedias[0]
const {SocialMedias, Experiences, Skills} = bigJson;



//Ex1
// const HomeScreen =(props)=>{
//   return(
//     <div>Home</div>
//   )
// }
// const ProfileScreen =(props)=>{
//   return(
//     <div>ProfileScreen</div>
//   )
// }
// const ShopScreen =(props)=>{
//   throw new Error ('sorry no shop really')
// }



// const App =()=> (
//   <BrowserRouter>
//   <div>
//     <nav className='nav nav-pills'>
      
//         <NavLink to="/">
//           Home
//         </NavLink>
      
      
//         <NavLink to="/profile">
//           Profile
//         </NavLink>
      
      
//         <NavLink to="/shop">
//           Shop
//         </NavLink>
        
//     </nav>
     
//       <Routes>
        
//           <Route exact path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
        
        
//           <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
        
        
//           <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
             
//     </Routes>
//   </div>

//   </BrowserRouter>
// )


//Ex2 
// function App() {
//   console.log(bigJson)
//   return (
//     <div>
//       <h1>Hi this is a Title</h1>
//       {
//         MyJson.map((item,i)=>{
//           return (
          
//           <PostList item = {item} key = {item.id}/>
//         )
//       })
//     }
//     </div>
    
    
//   );
// }

// function App() {
  
//   return (
//     <div>
      
//     <h2>Example 1</h2>
//     {
//       SocialMedias.map((item,i)=>{
//        return (
          
//         <SocialMedia item = {item} key = {item.id}/>
//         )
//       })
//     }

// <h2>Example 2</h2>
//     {
//       Skills.map((item,i)=>{
//        return (
          
//         <SkillsEx2 item = {JSON.stringify(item)} key = {item.id}/>
//         )
//       })
//     }
// <h2>Example 3</h2>
//     {
//       Experiences.map((item,i)=>{
//        return (
          
//         <Exp item = {JSON.stringify(item)} key = {item.id}/>
//         )
//       })
//     }
    
    
//     </div>
    
    
//   );
// }

// export default App;


// EX 3
const myData = {
  key1: 'myusername',
  email: 'mymail@gmail.com',
  name: 'Isaac',
  lastname: 'Doe',
  age: 27
};


const sendJson = () =>{
 
  fetch('https://webhook.site/cca74b72-1009-4ed7-83d3-9ac2762cf391', {
    method: 'POST',
    mode: 'no-cors',   
    headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "http://localhost/3000",
    "Access-Control-Allow-Headers": "X-Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization-With",
    "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS"
  
    },
    body: JSON.stringify(myData)
    
  })
  .then(res => {
     return res.json()
    })
    .then(res => {
    console.log(res);
    //returns an error, even though I see my post on the webhook site
})
.catch(err=>{console.log(err)})
}

function App() {
  
  
  return (
    <div>
     <button onClick={sendJson}>send json</button>
    </div>
    
    
  );
}
export default App;