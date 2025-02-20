import React, { useEffect, useState }  from "react";
import "./App.css";
 import AddVideos from "./component/AddVideos";
import VideoList from "./component/VideoList";
// import exampleData from "./data/exampleresponse.json";
// import AddVideosBtn from "./component/AddVideosBtn";


function App() {
 const [videodata, setVideoData] = useState([])

 useEffect(() => {
  fetch("http://localhost:5000/")
    .then((res) => res.json())
    .then((data) => 
    // console.log(data)
    setVideoData(data)
     )
   
  //  console.log(setVideoData)
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
 }, [])
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
      {/* <AddVideosBtn videodata={videodata} setVideoData={setVideoData} /> */}
      <AddVideos videodata={videodata} setVideoData={setVideoData} />
      <VideoList videodata={videodata} setVideoData={setVideoData} />
    </div>
  );
}

export default App;
