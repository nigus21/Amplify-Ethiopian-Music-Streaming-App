import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ libraryStatus,songs , isPlaying ,setCurrentSong , setIsPlaying , audioRef , setSongs}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-Library' : ''}`}>
      <h2>Library</h2>
      <div className='library-songs'>
        {songs.map((song) =>  <LibrarySong isPlaying={isPlaying} audioRef={audioRef} setIsPlaying={setIsPlaying} song={song} songs={songs} setCurrentSong={setCurrentSong} id={song.id} key={song.id} setSongs={setSongs} />)}
      </div>
    </div>
  )
}

export default Library
