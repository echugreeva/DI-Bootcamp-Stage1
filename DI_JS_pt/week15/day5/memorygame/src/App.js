import React from 'react';
import './App.css';
import heroes from './heroes.json'
import Card from './Card';


class App extends React.Component{
  constructor (){
    super();
    this.state = {
      heroesArr: heroes.superheroes,
      score:0,
      highestScore:0
    }
  }

  shuffle = (arr=[]) => {
      arr.sort(()=>Math.random()-0.5)
      return arr
  }

  handleClick = (id) => {
    // console.log(this.state.heroesArr)
    // console.log(`clicked on ${id}`);
    let clickedCard = this.state.heroesArr.filter(item => (item.id === id))
    // console.log(clickedCard);
    let ind = this.state.heroesArr.indexOf(clickedCard[0]);
    // console.log(ind);
    if(this.state.heroesArr[ind].clicked===false) {
      let newArr = [...this.state.heroesArr];
      console.log(`newArr: ${newArr}`)
      newArr[ind].clicked=true;
      this.setState({score: this.state.score + 1})
      if(this.state.score >= this.state.highestScore) {
        this.setState({highestScore: this.state.highestScore + 1})
      }
      
      this.setState({heroesArr:this.shuffle(newArr)})
      
    } else {
      let newArr = [...this.state.heroesArr];
      console.log(`newArr else: ${newArr}`)

      newArr.map(item => 
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
            <p>Score:{this.state.score}</p>
            <p>Top Score:{this.state.highestScore}</p>
          </nav>
          <div>
          Get points by clicking on an image but don't click on any more than once!
          </div>
          <div> 
            {this.state.heroesArr.map((item)=>{
              return (
      
                <Card key={item.id} info={item} onClick = {()=>{this.handleClick(item.id)}}/>
              )
              
            })}

          </div>
          
        </header>
      </div>
    );
  }
}

export default App;


