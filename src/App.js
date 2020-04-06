import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogPhotosData: []
    };
  }

  fetchData = async () => {
  
    const result = await axios.get(`https://dog.ceo/api/breeds/image/random`);
    this.setState(state => {
      const dogPhotosData = state.dogPhotosData.concat(result.data.message);
      return {
        dogPhotosData
      }

    })    
  };

  render() {
  
    return (
      <div id="container">
        <button className="fetch" onClick={this.fetchData}>FETCH</button>
        {this.state.dogPhotosData.map((photo, index) => {
          return(
            <div className="gallery"><img src={photo}></img></div>
          )
        })}
   
      </div>
    );
  }
}

export default App;
