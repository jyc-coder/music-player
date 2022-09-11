import React from "react";
import { useSelector } from "react-redux";
import img1 from "../../images/music-1.jpg";
import "./SongDetail.scss";

function SongDetail() {
  const playing = useSelector((state) => state.playing);
  return (
    <>
      <div className="header">
        <span>{playing ? "Now Playing" : "Not Plyaing"}</span>
      </div>
      <div className="img-area">
        <img src={img1} alt="이미지1"></img>
      </div>
      <div className="music-info">
        <p className="song">멋있는 음악제목</p>
        <p className="artist">아티스트</p>
      </div>
    </>
  );
}

export default SongDetail;
