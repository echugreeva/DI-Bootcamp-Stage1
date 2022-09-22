// import logo from './logo.svg';
import React from 'react';
import './App.css';
import books from './books.json'
import Book from './components/Book';
import Store from './components/Stores';

// function App() {
//   console.log(books.books)
//   return (
//     <div>
//       <h1>books</h1>
//       {
//         books.books.map(item=>{
//           return (
//           // <div>
//           //   {item.name}
//           // </div>)
//           <Book book = {item} key = {item.id}/>
//         )
//       })
//     }
//     </div>
    
    
//   );
// }
class App extends React.Component{
  constructor (){
    super();
    this.state = {
      //object from react, you can save her whatever data you want to render
      arr:[],
      title:'My Book Shop',
      storesArray:[]
    }
  }
//has to be an arrow function to work
  getStores =()=> {
    // console.log(books.books);
    fetch('https://logical-calf-89.hasura.app/api/rest/stores')
    .then(res=>res.json())
    .then(data=>{
      console.log(data.stores);
      this.setState({storesArray:data.stores});
    }
      )
    .catch(e=>{console.log(e)});

    
  }
  componentDidMount(){
    fetch('https://logical-calf-89.hasura.app/api/rest/books')
    .then(res=>res.json())
    .then(data=>{
      console.log(data.books);
      this.setState({arr:data.books});
    }
      )
    .catch(e=>{console.log(e)});
  }
  render (){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.getStores}>Get Stores</button>
        {
          this.state.storesArray.map(item=>{
            return (
              <Store store = {item} key = {item.id} />
            // <div>{item.address}, {item.city}</div>
          )
        })
      }
        
        {
          this.state.arr.map(item=>{
            return (
       
            <Book book = {item} key = {item.id}/>
          )
        })
      }
      </div>
      
      
    );
  }


  
}
export default App;
