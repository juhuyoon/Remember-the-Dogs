import React, { Component } from 'react';
import './App.css';
import dogs from './dogpics.json'
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import Title from './components/Title'
import DogsPics from './components/DogsPics'



class App extends Component {
  //original state
  state = {
    message: "Click on a doggy image!",
    topScore: 0,
    currentScore: 0,
    dogs: dogs,
    noDogs: dogs
  }

  componentDidMount() {}

  //randomize dogs
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  pickDog = type => {
    const findDog = this.state.noDogs.find(item => item.type === type);

      //if no dog is selected
    if(findDog === undefined){
      this.setState({
        message: 'Wrong Guess!',
        topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
        currentScore: 0,
        dogs: dogs,
        noDogs: dogs
      }); 
    } else {  //pick a new dog correctly
      const newDogs = this.state.noDogs.filter(item => item.type !== type);
        this.setState({
          message: "You Guessed Correctly!",
          currentScore: this.state.currentScore + 1,
          dogs: dogs,
          noDogs: newDogs
        });
    }

    this.shuffleArray(dogs);
  };

  render() {
  return(
    <Wrapper>
      <Navbar
          message = {this.state.message}
          currentScore={this.state.currentScore}
          topScore = {this.state.topScore}
        />
        <Title />
        {
          this.state.dogs.map(dog => (
            <DogsPics
                type={dog.type}
                pics={dog.pics}
                pickDog={this.pickDog}
                currentScore={this.state.currentScore}
            />
          ))
        }
      </Wrapper>
    );
  }
}

export default App;
