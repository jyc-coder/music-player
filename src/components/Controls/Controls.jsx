import React from "react";
import QueueMusic from "@mui/icons-material/QueueMusic";
import Repeat from "@mui/icons-material/Repeat";
import Pause from "@mui/icons-material/Pause";
import PlayArrow from "@mui/icons-material/PlayArrow";
import SkipPrevious from "@mui/icons-material/SkipPrevious";
import SkipNext from "@mui/icons-material/SkipNext";
import VolumeUp from "@mui/icons-material/VolumeUp";

import "./Controls.scss";
import { useSelector } from "react-redux";

function Controls({ play, pause, changeVolume }) {
  const playing = useSelector((state) => state.playing);

  const onClickPlay = () => {
    play();
  };

  const onClickPause = () => {
    pause();
  };

  const onChangeVolume = (event) => {
    changeVolume(event.target.value);
  };

  return (
    <div className="control-area">
      <QueueMusic sx={{ fontSize: 30, cursor: "pointer" }} />
      <Repeat sx={{ fontSize: 30, cursor: "pointer" }} />
      <SkipPrevious sx={{ fontSize: 30, cursor: "pointer" }} />
      {playing ? (
        <Pause
          sx={{ fontSize: 30, cursor: "pointer" }}
          onClick={onClickPause}
        />
      ) : (
        <PlayArrow
          sx={{ fontSize: 30, cursor: "pointer" }}
          onClick={onClickPlay}
        />
      )}
      <SkipNext sx={{ fontSize: 30, cursor: "pointer" }} />
      <div className="volume-container">
        <VolumeUp sx={{ fontSize: 20 }} />
        <input
          type="range"
          style={{ cursor: "pointer" }}
          defaultValue={1}
          onChange={onChangeVolume}
          min="0"
          max="1"
          step="0.1"
        />
      </div>
    </div>
  );
}

export default Controls;
