import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  // using useState hook for changing text 
  const [text, setText] = useState("");

  // below function is for light and dark mode
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  // function for switching between light and dark mode
  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(48 74 112)";
      showAlert("Darkmode has been enabled", "success");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };


  // function to convert charcters to lowercase
  const handleLoClick = () => {
    // if text.length is greater than 0 so the folllowing code will be exist
    if (text.length > 0) {
      let newText = text.toLowerCase();
      setText(newText);
      showAlert("Converted Into Lowercase", "success")
    } else {
      showAlert("Please Enter Text to Analyze", "warning")
    }
  };


  // function to convert charcters to uppercase
  const handleUpClick = () => {
    if (text.length > 0) {
      let newText = text.toUpperCase();
      setText(newText);
      showAlert("Converted Into Uppercase", "success")
    } else {
      showAlert("Please Enter Text to Analyze", "warning")
    }
  };

  //function for copy the text from the textarea
  const handleCopy = () => {
    if (text.length > 0) {
      navigator.clipboard.writeText(text);
      showAlert("Text Copied", "success")
    } else {
      showAlert("Please Enter Text to Copy", "warning")
    }
  };

  // function for clearing the text in the textBox
  const handleClear = () => {
    if (text.length > 0) {
      setText("");
      showAlert("Text has been cleared", "success")
    } else {
      showAlert("Please Enter Text to Clear", "warning")
    }
  };

  // function to remove extra spaces from text
  const removeExtraSpaces = () => {
    if (text.length > 0) {
      let newText = text.split(/[ ]+/)
      setText(newText.join(' '))
      showAlert("Extra spaces has been removed", "success")
    } else {
      showAlert("Please Enter Text to Remove Extra Spaces", "warning")
    }
  }


  return (
    <>

      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Textform
        heading="Enter your Text to analyze below"
        mode={mode}
        showAlert={showAlert}
        handleOnChange={handleOnChange}
        handleLoClick={handleLoClick}
        removeExtraSpaces={removeExtraSpaces}
        handleClear={handleClear}
        handleCopy={handleCopy}
        handleUpClick={handleUpClick}
        text={text}
      />
    </>
  );
}

export default App;
