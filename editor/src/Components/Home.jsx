import React, { useState } from "react";

export default function TextEdit(props) {
  //creating state for simple functions
  const [text, setText] = useState("");
  const [mystyle, setMyStyle] = useState({
    textDecoration: "none",
  });

  //function for handling text
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  //case toggle function
  const toggleCase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  //counts words
  function wordCounter() {
    let count = 0;
    if (text.length > 0) {
      var string = text.replace(/\s+/g, " ");
      count = string.split(" ").length - 1;
    }
    return count;
  }

  //clear text
  const clearText = () => {
    setText("");
  };

  //text bold
  const textBold = () => {
    if (mystyle.textDecoration === "none") {
      setMyStyle({
        fontWeight: "bold",
      });
    } else {
      setMyStyle({
        textDecoration: "none",
      });
    }
  };

  //text Italic
  const textItalic = () => {
    if (mystyle.textDecoration === "none") {
      setMyStyle({
        fontStyle: "Italic",
      });
    } else {
      setMyStyle({
        textDecoration: "none",
      });
    }
  };

  //text Underline
  const textUnderline = () => {
    if (mystyle.textDecoration === "none") {
      setMyStyle({
        textDecoration: "underline",
      });
    } else {
      setMyStyle({
        textDecoration: "none",
      });
    }
  };
  //opposite of mode function
  
  //text color
  /*
  function textColor(){
    if(props.mode ==="dark" && text.style.color==='red'){
        return 'danger'
    }
}
*/

  //copy Text
  const copyText = () => {
    var text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("success", "Copied to keyboard");
  }
  //changing text color: 
  //Red
  const textRed = () =>{
    console.log("red pressed");
    setMyStyle({
        color: "red",
    })
  }
  //green
  const textGreen = () =>{
    setMyStyle({
        color:"green"
    })
  }
  //yellow
  const textYellow = () =>{
    setMyStyle({
        color:"yellow"
    })
  }
  //blue
  const textBlue = () =>{
    setMyStyle({
        color:"blue"
    })
  }

  
  return (
    <div className="container my-5">
      <div className="form-group">
        <h2>
          <label className={`text-${props.notMode}`} htmlFor="textBox">
            {props.heading}
          </label>
        </h2>
        <textarea
          className={`form-control bg-${props.mode} text-${props.notMode}`}
          id="textBox"
          rows="9"
          onChange={handleOnChange}
          value={text}
          style={mystyle}
        ></textarea>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <button className="btn btn-primary " onClick={clearText}>
              Clear
            </button>
            <button className="btn btn-primary mx-3" onClick={textBold}>
              Bold
            </button>
            <button className="btn btn-primary " onClick={textItalic}>
              Italic
            </button>
            <button className="btn btn-primary mx-3" onClick={textUnderline}>
              Underline
            </button>
            <button className="btn btn-primary" onClick={toggleCase}>
              Case Toggle
            </button>
            <button className="btn btn-primary mx-3" onClick={copyText}>
              Copy
            </button>
          </div>
          <div className="col-4">
          <div className="row">
            <div className={`text-${props.notMode}`}>Choose color to highlight the text :</div>
            <div
              className="btn-group btn-group-lg "
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" className="btn btn-danger" onClick={textRed}></button>
              <button type="button" className="btn btn-success" onClick={textGreen}></button>
              <button type="button" className="btn btn-warning" onClick={textYellow}></button>
              <button type="button" className="btn btn-info" onClick={textBlue}></button>
            </div>
          </div>
          </div>
        </div>

        <div className={`container my-3 text-${props.notMode}`}>
          <p>
            {wordCounter()} words , {text.length} characters
          </p>
        </div>
      </div>
    </div>
  );
}
