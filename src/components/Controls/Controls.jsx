import React, { memo, useCallback } from "react";
import QueueMusic from "@mui/icons-material/QueueMusic";
import Repeat from "@mui/icons-material/Repeat";
import Pause from "@mui/icons-material/Pause";
import PlayArrow from "@mui/icons-material/PlayArrow";
import SkipPrevious from "@mui/icons-material/SkipPrevious";
import SkipNext from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
import VolumeUp from "@mui/icons-material/VolumeUp";

import "./Controls.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  nextMusic,
  prevMusic,
  setRepeat,
} from "../../store/musicPlayerReducer";

const RepeatButton = memo(({ repeat, ...props }) => {
  switch (repeat) {
    case "ALL":
      return <Repeat sx={{ fontSize: 30, cursor: "pointer" }} {...props} />;

    case "ONE":
      return (
        <RepeatOneIcon sx={{ fontSize: 30, cursor: "pointer" }} {...props} />
      );

    case "SHUFFLE":
      return (
        <ShuffleIcon sx={{ fontSize: 30, cursor: "pointer" }} {...props} />
      );

    default:
      return null;
  }
});

function Controls({
  play,
  pause,
  changeVolume,
  resetDuration,
  setshowPlayList,
}) {
  const playing = useSelector((state) => state.playing);
  const repeat = useSelector((state) => state.repeat);
  const dispatch = useDispatch();
  const onClickPlay = useCallback(() => {
    play();
  }, [play]);

  const onClickPause = useCallback(() => {
    pause();
  }, [pause]);

  const onChangeVolume = useCallback(
    (event) => {
      changeVolume(event.target.value);
    },
    [changeVolume]
  );

  const onClickPrevious = useCallback(() => {
    if (repeat === "ONE") {
      resetDuration();
    } else {
      dispatch(prevMusic());
    }
  }, [repeat, resetDuration, dispatch]);

  const onClickNext = useCallback(() => {
    if (repeat === "ONE") {
      resetDuration();
    } else {
      dispatch(nextMusic());
    }
  }, [repeat, resetDuration, dispatch]);

  const onClickRepeat = useCallback(() => {
    dispatch(setRepeat());
  }, [dispatch]);

  const onClickShowPlayList = useCallback(() => {
    setshowPlayList(true);
  }, [setshowPlayList]);

  return (
    <div className="control-area">
      <QueueMusic
        sx={{ fontSize: 30, cursor: "pointer" }}
        onClick={onClickShowPlayList}
      />

      <RepeatButton repeat={repeat} onClick={onClickRepeat} />

      <SkipPrevious
        sx={{ fontSize: 30, cursor: "pointer" }}
        onClick={onClickPrevious}
      />
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
      <SkipNext
        sx={{ fontSize: 30, cursor: "pointer" }}
        onClick={onClickNext}
      />
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

export default memo(Controls);
