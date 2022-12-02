import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Sidebar, SidebarComponent } from '@syncfusion/ej2-react-navigations';
import "./App.css"
import "./assets/css/demo/nit-styles.css"
// import Header from "./components/header/Header";
// import Main from "./components/main/Main";
// import Footer from "./components/footer/Footer";
import Sidenav from "./components/sidenav/Sidenav";
import Header from "./components/header/Header";

import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Comment from "./pages/Comment";
import Analytics from "./pages/Analytics";
import Product from "./pages/Product";

import './App.css'
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
   
      <BrowserRouter>
      <div className='container'>
      <Sidenav>
      <Header/>
      <Routes>
          <Route path="/" element={<Dashboard/>}/>
          
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/comment" element={<Comment/>}/>
          <Route path="/analytics" element={<Analytics/>}/>
          <Route path="/product" element={<Product/>}/>
      </Routes>
      </Sidenav>
      </div>
      </BrowserRouter>
    
  );
};

export default App;


//Dashborad React Code
// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.type = 'Push';
//         this.leftToggle = this.leftToggle.bind(this);
//         this.rightToggle = this.rightToggle.bind(this);
//         this.onCreate = this.onCreate.bind(this);
//     }
//     onCreate() {
//         this.leftSidebarObj.element.style.visibility = '';
//         this.rightSidebarObj.element.style.visibility = '';
//     }
   
//     leftToggle() {
//         this.leftSidebarObj.toggle();
//     }
//     rightToggle() {
//         this.rightSidebarObj.toggle();
//     }
//     render() {
//         return (<div className="control-section">
//                 <div id="wrapper">
                
//                     <SidebarComponent id="default" ref={Sidebar => this.leftSidebarObj = Sidebar} width="200px" type={this.type} created={this.onCreate} style={{ visibility: "hidden" }}>
//                         <div > 
//                         <div className="nit-container">
//     <h5>Dashboard</h5>
//   </div>
//   <div className="nit-bar-block">
//     <a href="#" className="nit-bar-item nit-button nit-padding nit-blue"><i className="fa fa-users fa-fw"></i>  Overview</a>
//     <a href="#" className="nit-bar-item nit-button nit-padding"><i className="fa fa-eye fa-fw"></i>  Views</a>
//     <a href="#" className="nit-bar-item nit-button nit-padding"><i className="fa fa-users fa-fw"></i>  Traffic</a>
//     <a href="#" className="nit-bar-item nit-button nit-padding"><i className="fa fa-bullseye fa-fw"></i>  Geo</a>
//     <a href="#" className="nit-bar-item nit-button nit-padding"><i className="fa fa-diamond fa-fw"></i>  Orders</a>
//     <a href="#" className="nit-bar-item nit-button nit-padding"><i className="fa fa-bell fa-fw"></i>  News</a>
//     <a href="#" className="nit-bar-item nit-button nit-padding"><i className="fa fa-bank fa-fw"></i>  General</a>
//     <a href="#" className="nit-bar-item nit-button nit-padding"><i className="fa fa-history fa-fw"></i>  History</a>
//     <a href="#" className="nit-bar-item nit-button nit-padding"><i className="fa fa-cog fa-fw"></i>  Settings</a><br/><br/>
//   </div>
//                         </div>
//                     </SidebarComponent>
                    
//                     <SidebarComponent id="default1" ref={Sidebar => this.rightSidebarObj = Sidebar} width="200px" type={this.type} position="Right" created={this.onCreate} style={{ visibility: "hidden" }}>
//                         <div className="title"> Right Sidebar content</div>
//                     </SidebarComponent>
//                     <div className="e-main-content">
//                     <Header/>
//                         <div className='pd-top nit-bar-item nit-right'><ButtonComponent onClick={this.leftToggle} id="toggle-btn" className="e-btn e-info " ><i className='fa fa-bars'></i></ButtonComponent></div>
                       
//                        <Main />
                      
//                     </div>
//                </div>
              
    
//             </div>);
//     }
// }




// import React from "react";
// import "./App.css"
// import Header from "./components/header/Header";
// import Main from "./components/main/Main";
// import Footer from "./components/footer/Footer";
// import SideNav from "./components/sidenav/Sidenav";
// import "./assets/vendors/js/vendor.bundle.base.js"
// import "./assets/vendors/chartjs/Chart.min.js"

// import "./assets/js/misc.js"
// import "./assets/js/dashboard.js"

// export default function App() {
//   return (
//     <div >
//       <div className="flex">
//         <div><SideNav /></div>
//         <div className="body-width">
//         <Header />
//       <Main />
//       <Footer />
//         </div>
//         </div> 
     
     
//     </div>
//   );
// }
// import {useState} from "react";

// import './App.css'
// function IncDecCounter(){
//   let [num, setNum]= useState(0);
//   let incNum =()=>{
//     if(num<10)
//     {
//     setNum(Number(num)+1);
//     }
//   };
//   let decNum = () => {
//      if(num>0)
//      {
//       setNum(num - 1);
//      }
//   }
//  let handleChange = (e)=>{
//    setNum(e.target.value);
//   }

//    return(
//     <>
//     <div className="col-xl-1">
//     <div className="input-group">
//   <div className="input-group-prepend">
//     <button className="button" type="button" onClick={decNum}>-</button>
//   </div>
//   <input type="text" className="form-control" value={num} onChange={handleChange}/>
//   <div className="input-group-prepend">
//     <button className="button" type="button" onClick={incNum}>+</button>
//   </div>
// </div>
// </div>
//    </>
//   );
// }

// export default IncDecCounter;


// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clicks: 0,
//       show: true
//     };
//   }

//   IncrementItem = () => {
//     this.setState({ clicks: this.state.clicks + 1 });
//   }
//   DecreaseItem = () => {
//     this.setState({ clicks: this.state.clicks - 1 });
//   }
 
//   render() {
//     return (
//       <div>
//         <center><button onClick={this.IncrementItem} className="button">+</button>
//         <p>{ this.state.show ? <h2>{ this.state.clicks }</h2> : '' }</p>
//        <button onClick={this.DecreaseItem} className="button">-</button>
//       </center>
       
//       </div>
//     );
//   }
// }

// export default App;


// import React, {useState} from 'react'

// const App = () => {
//   const [name,setName] = useState("Telugu SkillHub!!!")
//   const [count,setCount] = useState(0)
//   const [dec,setDec] = useState(10)
//     return (
//       <div>
//         <h1>Welcome to my React Tuto!!</h1>
//         <h2>{name}</h2>
//         <button onClick={ () => setName("English SkillHub!!!")}>Change</button>
//         <h1>{count}</h1>
//         <h1>{dec}</h1>
//         <button onClick={() => setCount(count+1)}>+</button>
//         <button onClick={() => setDec(dec-1)}>-</button>
//       </div>
//     )
//   }
// export default App
//States and Props Using Class
// import logo from './logo.svg';
// import React, {Component} from 'react';
// import Display from './Display';

// export default class App extends Component{
//   state = {
//     name : "Telugu SkillHub!!!",
//     mobile : "7093386680"
//   }
//   render(){
//     return(
//       <div>
//           <center>
//             <h2>{this.state.name}</h2>
//             <h3>{this.state.mobile}</h3>
//             <Display name={this.state.name} />
//             <Display mob={this.state.mobile} />

//           </center>
//       </div>
//     )
//   }
// }
// export default class HelloMessage extends React.Component {
//   render() {
//     // return React.createElement(
//     //   "div",
//     //   null,
//     //   "Hello ",
//     //   this.props.name
//     // );

//  return(
//   <div>
//       hi hi hi hi
//     </div>
//  )
  
// }
// }

// root.render(React.createElement(HelloMessage, { name: "Taylor" }));

// // export default HelloMessage()


// const App =()=>{
//   return(
//     <>
    
//     <div>
//       hi hi hoefkodks
//       </div></>
//   )
// }
// export default App;