import React, { useState, useRef } from "react";
import "./styles/App.scss";

// importing components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

//import util
import data from "./util";

const App = () => {

  // States
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
    });
  };

  return (
    
    <div className="App">
      
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      
      <Player
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        audioRef={audioRef}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setSongs={setSongs}
      />

      <Library
        libraryStatus={libraryStatus}
        setSongs={setSongs}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />

      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};
export default App;