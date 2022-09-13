import React from "react";
import { useSelector } from "react-redux";
import "./SongDetail.scss";

function SongDetail() {
  const playing = useSelector((state) => state.playing);
  const playList = useSelector((state) => state.playList);
  const currentIndex = useSelector((state) => state.currentIndex);
  return (
    <>
      <div className="header">
        <span>{playing ? "Now Playing" : "Not Plyaing"}</span>
      </div>
      <div className="img-area">
        <img
          src={playList[currentIndex].img}
          alt={playList[currentIndex].name}
        ></img>
      </div>
      <div className="music-info">
        <p className="song">{playList[currentIndex].name}</p>
        <p className="artist">{playList[currentIndex].artist}</p>
      </div>
    </>
  );
}

export default SongDetail;
