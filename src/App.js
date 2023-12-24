import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import About from "./Components/About"
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";


function App() {
  const [resumeData, setResumeData] = useState(null);

  const getResumeData = () => {
    fetch("./resumeData.json")
      .then((response) => response.json())
      .then((data) => setResumeData(data))
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };
  console.log(resumeData)
  useEffect(() => {
    getResumeData();
  }, []);

  return (
    <div className="App">
      <Header data={resumeData?.main} ></Header>
      <About data={resumeData?.main} />
      <Resume data={resumeData?.resume}/>
      <Portfolio data={resumeData?.portfolio} />
      <Footer data={resumeData?.main}/>
    </div>
  );
}

export default App;
