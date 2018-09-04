import React, { Component } from 'react';
import logo from './logo.svg'; // <img src={logo} className="App-logo" alt="logo" />
import './App.css';

class App extends Component {
  constructor (props){
    super(props);

    this.state = {
      input: "Filler Text"
    }
    this.handleChange = this.handleChange.bind(this);

  }

    handleChange(event){
      this.setState({
        input: event.target.value
      });
    }

  render() {
    return (
      <div className="App">
        <form className="Text-box Markdown-editor" id="editor">
          <h1 className="Box-title">Editor</h1>
          <textarea value={this.state.input} onChange={this.handleChange} className="User-input-text"/>
        </form>
        <div className="Text-box Markdown-preview" id="preview">
          <h1 className="Box-title">Preview</h1>
          <div className="Text-area">
            <p>{this.state.input}</p>
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
