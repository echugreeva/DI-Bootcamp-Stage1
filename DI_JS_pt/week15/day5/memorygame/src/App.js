import React from 'react';
import './App.css';

import heroes from './heroes.json'
import Card from './Card';


class App extends React.Component{
  constructor (){
    super();
    this.state = {
      //object from react, you can save her whatever data you want to render
      heroesArr: heroes.superheroes,
      score:0,
      highestScore:0
    }
  }

  shuffle = (arr) => {
      let nAr = arr.sort(function () {
        return Math.random()-0.5
      })
      return nAr
  }

  handleClick = (e) => {
    console.log(`clicked on ${e.target.key}`)
    let clickedCard = this.state.heroesArr.filter(item => (item.id === e.target.key))
    let ind = this.state.heroesArr.indexOf(clickedCard);
    if(this.state.heroesArr[ind].clicked===false) {
      let newArr = {...this.state.heroesArr};
      newArr[ind].clicked=true;
      this.setState({score: this.state.score + 1})
      this.setState({score: this.state.highestScore + 1})
      this.setState({heroesArr:this.shuffle(newArr)})
      
    } else {
      let newArr = {...this.state.heroesArr};
      newArr = newArr.map(item => 
        item.clicked = false
      )
      this.setState({heroesArr:this.shuffle(newArr)})
      if(this.state.score > this.state.highestScore ) {
        this.setState({highestScore:this.state.score})
        this.setState({score:0})
      } else {
        this.setState({score:0})
      }
    }

  }
  
  render() {
    console.log(this.state.heroesArr[0])
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <h1>Superheroes Memory Game
            </h1>
            <p>Score:</p>
            <p>Top Score:</p>
          </nav>
          <div>
          Get points by clicking on an image but don't click on any more than once!
          </div>
          <div> 
            {this.state.heroesArr.map((item)=>{
              return (
                <Card key={item.id} info={item} onClick = {this.handleClick}/>
              )
              
            })}

          </div>
          
        </header>
      </div>
    );
  }
}

export default App;

//game logic: every click => checj card click stus, if not clicked, change click status in card object, add score, add to highest score, reshuffle array.
// once clicked on card that was clicked: check score vs highest score, save highest score, set score to null, set click status to false,  reshuffle 

