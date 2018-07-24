import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Image from './components/Image';
import Img from './components/Img.json';
import broccoli from './images/broc.jpg';
import carrot from './images/carrot.jpg';
import pepper from './images/pepper.jpg';
import celery from './images/celery.jpg';
import potato from './images/potato.jpg';
import tomato from './images/tomato.jpg';
import lettuce from './images/lettuce.jpg';
import kale from './images/kale.jpg';
import squash from './images/squash.jpg';
import greenbean from './images/bean.jpg';
import eggplant from './images/egg.jpg';
import cucumber from './images/cuc.jpg';

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  shuffleArray = array => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray;
  };

  pickImg = name => {
    console.log('Clicked!!');
    let picked = this.state.picked;

    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore:
          this.state.correct + 1 > this.state.topscore
            ? this.state.correct + 1
            : this.state.topscore,
        message: 'Correct: Good choice!'
      });
      this.shuffleArray();
    } else {
      this.setState({
        message: 'Incorrect: Play again?',
        correct: 0,
        picked: []
      });
    }
  };

  imgSwitch = name => {
    switch (name) {
      case 'broccoli':
        return `${broccoli}`;
      case 'carrot':
        return `${carrot}`;
      case 'pepper':
        return `${pepper}`;
      case 'celery':
        return `${celery}`;
      case 'potato':
        return `${potato}`;
      case 'tomato':
        return `${tomato}`;
      case 'lettuce':
        return `${lettuce}`;
      case 'kale':
        return `${kale}`;
      case 'squash':
        return `${squash}`;
      case 'greenbean':
        return `${greenbean}`;
      case 'eggplant':
        return `${eggplant}`;
      case 'cucumber':
        return `${cucumber}`;
      default:
        return `${kale}`;
    }
  };

  render() {
    return (
      <div>
        <Navbar
          correct={this.state.correct}
          topscore={this.state.topscore}
          message={this.state.message}
        />
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image
              src={this.imgSwitch(image.name)}
              name={image.name}
              key={image.name}
              pickImg={this.pickImg}
            />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
