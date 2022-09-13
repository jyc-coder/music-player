import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

const getDuration = (music) => {
  return new Promise((resolve) => {
    const audio = new Audio();
    audio.onloadedmetadata = () => {
      const minutes = `0${parseInt(audio.duration / 60, 10)}`;
      const seconds = `0${parseInt(audio.duration % 60)}`;
      resolve(`${minutes}:${seconds.slice(-2)}`);
    };
    audio.src = music;
  });
};

const PlayListItem = ({ item, index }) => {
  const currentIndex = useSelector((state) => state.currentIndex);
  const [duration, setduration] = useState("00:00");
  useEffect(() => {
    async function getTime() {
      const durationTime = await getDuration(item.music);
      setduration(durationTime);
    }
    getTime();
  }, [item.music]);

  return (
    <>
      <div className={classNames("row", { playing: currentIndex === index })}>
        <span>{item.name}</span>
        <p>{item.artist}</p>
      </div>
      <span
        className={classNames("music-duration", {
          playing: currentIndex === index,
        })}
      >
        {duration}
      </span>
    </>
  );
};

export default PlayListItem;
