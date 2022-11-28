import React from "react";
import Navbar from "./Components/Navbar.jsx";
import "./App.css";
import About from "./Components/About.jsx";
import TextEdit from "./Components/Home.jsx";
import { useState } from "react";
import Alert from "./Components/Alert.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [notMode, setNoMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  //const [date, setDate] = useState();

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setNoMode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light mode has been enabled");
    } else {
      setMode("dark");
      setNoMode("light");
      document.body.style.backgroundColor = "#121212";
      showAlert("success", "Dark mode has been enabled");
    }
  };
 
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          title="Text Editor"
          mode={mode}
          notMode={notMode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/" 
            element={
              <TextEdit
                showAlert={showAlert}
                heading="Edit your text here:"
                mode={mode}
                notMode={notMode}
              />
            }
          />
          <Route exact path="about/"
           element={<About heading="Your notes"
           mode={mode}
           notMode ={notMode} 
           />} />
        </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
      {<Routes>
      <Route path="/" element={<Link1 />} />
      <Route path="users/*" element={<Link2 />} />
      </Routes>
     }
      </BrowserRouter> */}
    </div>
  );
}

export default App;
