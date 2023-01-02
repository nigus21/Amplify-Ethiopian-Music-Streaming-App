import React from "react";

const LibrarySong = ({audioRef , isPlaying , setIsPlaying , song , songs , setCurrentSong , id ,setSongs}) => {
  
  const songSelectHandeler = () =>{
        // const selectedSong=songs.filter(song=>song.id === id)
        // setCurrentSong(selectedSong[0])
        setCurrentSong(song)

        const newSong = songs.map((song) => {
          if(song.id === id){
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


        if(isPlaying || !isPlaying){
          setIsPlaying(true)
          const playPromise = audioRef.current.play();
          if(playPromise !== undefined){
            playPromise.then((audio)=>{
              audioRef.current.play();
            })
          }
        }
        audioRef.current.play();
    }

    return (
    <div onClick={songSelectHandeler} className= {`library-song ${song.active ? 'selected' : ''}`} >
      <img src={song.cover}></img>
      <div className="song-description">
        <h3>{song.artist}</h3>
        <h4>{song.name}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;