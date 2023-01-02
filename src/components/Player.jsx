import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  songInfo,
  setSongInfo,
  audioRef,
  currentSong,
  setIsPlaying,
  isPlaying,
  songs,
  setCurrentSong,
  setSongs
}) => {

  useEffect(()=>{
    const newSong = songs.map((song) => {
      if(song.id === currentSong.id){
        return {
          ...song,
          active:true,
        }
      }
      else{
        return{
          ...song,
          active:false,
        }
      }
    })

    setSongs(newSong)
  },[currentSong])

  const skipHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length -1])
        return
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
  };

  const playSongHandeler = () => {
    if (isPlaying) {
      setIsPlaying(!isPlaying);
      audioRef.current.pause();
    } else {
      setIsPlaying(!isPlaying);
      audioRef.current.play();
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandeler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
          type="range"
          value={songInfo.currentTime}
          onChange={dragHandeler}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipHandler("skip-back")}
          className="icon skip-back"
          size="3x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandeler}
          className="icon play"
          size="3x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipHandler("skip-forward")}
          className="icon skip-forward"
          size="3x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;