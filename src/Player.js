import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import "./player.css";
import songs from './songs.json';


const Player = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[currentSongIndex]);
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);

  const [play, { pause, duration, sound }] = useSound(currentSong.audioFile);
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });
  const [seconds, setSeconds] = useState();
  const [time, setTime] = useState({
    min: "",
    sec: "",
  });


  useEffect(() => {
    const sec = duration / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    const calculatedTime = {
      min: min,
      sec: secRemain,
    };
    setTime(calculatedTime);
  }, [duration]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  const playNextSong = () => {
    pause();
    const nextIndex = (selectedSongIndex + 1) % songs.length;
    setSelectedSongIndex(nextIndex);
    setCurrentSong(songs[nextIndex]);
  };

  const playPreviousSong = () => {
    pause();
    const previousIndex = (selectedSongIndex - 1 + songs.length) % songs.length;
    setSelectedSongIndex(previousIndex);
    setCurrentSong(songs[previousIndex]);
  };

  const selectSong = (index) => {
    pause();
    setSelectedSongIndex(index);
    setCurrentSong(songs[index]);
    setCurrentSongIndex(songs[index])
  };

  return (
    <>
     <p class="article">Мои главные хиты</p>
    <div id="trt">
     
    <div className="component">
      <h2>Послушай!</h2>
      <img className="musicCover" src={currentSong.coverImage} alt="Album Cover" />
      <div>
        <h3 className="title">{currentSong.title}</h3>
        <p className="subTitle">{currentSong.artist}</p>
      </div>
      <div>
        <div className="time">
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          <p>
            {time.min}:{time.sec}
          </p>
        </div>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          defaultValue="0"
          value={seconds}
          className="timeline"
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
      </div>
      <div>
        <button className="playButton" onClick={playPreviousSong}>
          <IconContext.Provider value={{ size: "3em", color: "#8c27ae" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>

        <button className="playButton" onClick={playingButton}>
          {isPlaying ? (
            <IconContext.Provider value={{ size: "3em", color: "#8c27ae" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ size: "3em", color: "#8c27ae" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          )}
        </button>

        <button className="playButton" onClick={playNextSong}>
          <IconContext.Provider value={{ size: "3em", color: "#8c27ae" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
      
    </div>
    <div className="songList"> 
    <h2>Всегда можно выбрать</h2>
    <ol>
      {songs.map((song, index) => (
        <li href="#" style={{color:"#5b27ae" , fontSize:"19px"}} key={index} onClick={() => selectSong(index)}>
          {song.title}
        </li>
      ))}
    </ol>
  </div> </div></>
  );
};

export default Player;