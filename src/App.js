import React, { Component } from 'react';
import maxWin from './maximize-window.svg';
import shrinkWin from './shrink-window.svg';
import './App.css';
import marked from 'marked';


class App extends Component {
  constructor (props){
    super(props);

//START GIANT STRING CALLED "FILLER"
    const FILLER = "# Welcome to my React Markdown Previewer!\n\
\n\
## This is a sub-heading...\n\
### And here's some other cool stuff:\n\
  \n\
Heres some code, `<div></div>`, between 2 backticks.\n\
\n\
```\n\
// this is multi-line code:\n\
\n\
function anotherExample(firstLine, lastLine) {\n\
  if (firstLine == '```' && lastLine == '```') {\n\
    return multiLineCode;\n\
  }\n\
}\n\
```\n\
  \n\
You can also make text **bold**... whoa!\n\
Or _italic_.\n\
Or... wait for it... **_both!_**\n\
And feel free to go crazy ~~crossing stuff out~~.\n\
\n\
There's also [links](https://www.freecodecamp.com), and\n\
> Block Quotes!\n\
\n\
And if you want to get really crazy, even tables:\n\
\n\
Wild Header | Crazy Header | Another Header?\n\
------------ | ------------- | ------------- \n\
Your content can | be here, and it | can be here....\n\
And here. | Okay. | I think we get it.\n\
\n\
- And of course there are lists.\n\
  - Some are bulleted.\n\
     - With different indentation levels.\n\
        - That look like this.\n\
\n\
\n\
1. And there are numbererd lists too.\n\
1. Use just 1s if you want! \n\
1. But the list goes on...\n\
- Even if you use dashes or asterisks.\n\
* And last but not least, let's not forget embedded images:\n\
\n\
![React Logo w/ Text](https://goo.gl/Umyytc)";

//END STUPID LONG STRING FOR CONST "FILLER"



    this.state = {
      input: FILLER,
      editorSizeBig: false,
      previewSizeBig: false,
    }

    

    this.handleChange = this.handleChange.bind(this);
    this.toggleEditorSize = this.toggleEditorSize.bind(this);
    this.togglePreviewSize = this.togglePreviewSize.bind(this);
  }

    handleChange(event){
      this.setState({
        input: event.target.value
      });
    }

    toggleEditorSize(){
      this.setState({
        editorSizeBig: !this.state.editorSizeBig,
      })
    }

    togglePreviewSize(){
      this.setState({
        previewSizeBig: !this.state.previewSizeBig,
      })
    }


    getMarkdownText() {
    var rawMarkup = marked(this.state.input, {breaks:true, sanitize: true});
    var pattern = /a href=/g;
    return { __html: rawMarkup.replace(pattern,"a target='_blank' href=") };
  }


  render() {
   
    const editorCheck = this.state.editorSizeBig ? shrinkWin : maxWin;
    const previewCheck = this.state.previewSizeBig ? shrinkWin : maxWin;

    const editorBoxSize = this.state.editorSizeBig ? {height: 600} : {};
    const previewBoxSize = this.state.previewSizeBig ? {height: 600} : {};

    return (
      <div className="App">
        <form className="Text-box Markdown-editor" style={editorBoxSize}>
          <div className="header">
            <h1 className="Box-title">Editor</h1>
            <button type="button" className="btn-resize" onClick={this.toggleEditorSize} ><img src={editorCheck} className="window-icon" alt="shrink or maximize window" /></button>
          </div>
          <textarea value={this.state.input} onChange={this.handleChange} className="Text-area" id="editor"/>
        </form>
        <div className="Text-box Markdown-preview" style={previewBoxSize}>
          <div className="header">
            <h1 className="Box-title">Preview</h1>
            <button type="button" className="btn-resize" onClick={this.togglePreviewSize} ><img src={previewCheck} className="window-icon" alt="shrink or maximize window" /></button>
          </div>
          <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()} className="Text-area"/>
        </div>
        <div className="credit">
      <p>Designed and Developed by <a href="mailto: jeffmabney@gmail.com">Jeff Abney</a></p>
    </div>
      </div>
    );
  }
}

export default App;
