import './App.css';
// import {useState, useEffect} from 'react'
import React from 'react'
import NoTasks from './components/noTasks'

// function App() {
//   const [inputValue, typeTask] = useState('');
//   const [taskList, addTask]=useState([]);
//   let taskArr = [];
//   console.log(inputValue);
//   console.log(taskArr);

//   useEffect(()=>{
//     addTask(taskArr);
    
//   },[])
//   return (
    
//     <div className="App">
//       <header className="App-header">
//         <h1>To do</h1>
//         <form onSubmit={(e)=>{
//           e.preventDefault()
//           taskArr.push(inputValue)
          
//           }}>
//         <input type='text' placeholder='add task' onChange={(e)=>{typeTask(e.target.value)}}></input>
//         </form>
        
//             {
//                 taskList.map((item,i)=>{
//                     return(
//                         <div key={i}>
//                             <p>{item}</p>     
//                         </div>
//                     ) 
//                 })
//             }
//       </header>
//     </div>
//   );
// }

let inputVal;

class App extends React.Component {
  constructor(){
    super();
    this.state={
        toDolist:[],
        empty: 2
    }
}

render () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To do</h1>
        
        <div>
        {
                this.state.toDolist.map((item,i)=>{
                    return(
                        <div key={i} onClick={(e)=>{
                          // 
                          const arr = this.state.toDolist;
                          arr.splice(item,1);
                          this.setState({toDolist:arr})
                          if(this.state.toDolist.length < 1){
                            this.setState({empty:1})
                          } 
                          console.log(this.state.toDolist.length)
                          console.log(this.state.empty)
                        }} 
                        onMouseOver={(e)=>{e.target.style.textDecoration = 'line-through'}}
                        onMouseLeave={(e)=> {e.target.style.textDecoration = 'none'}}>
                            <p>{item}</p>     
                        </div>
                    ) 
                })
            }
        </div>
        <div>
           <NoTasks display = {this.state.empty}/>               
        </div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          // console.log(inputVal, this.state.toDolist);
          this.setState({toDolist:this.state.toDolist.concat(inputVal)})
          this.setState({empty:2})
          document.querySelector('input').value='';
          inputVal='';
          }}>
        <input type='text' placeholder='add task' onChange={(e)=>{inputVal=e.target.value}}></input>
        </form>
        
            
      </header>
    </div>

  )

}
  
}



export default App;


//ad list item component, on click get element id, and remove from arr,
//  update state, when arr empty show component that no tasks to do 

//add timeout for element removal, show strikethrought before