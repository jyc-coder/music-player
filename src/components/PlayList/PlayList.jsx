import React from "react";
import classNames from "classnames";
import { Close, QueueMusic } from "@mui/icons-material";
import PlayListItem from "./PlayListItem";
import MusicList from "../../store/data";
import "./PlayList.scss";

const PlayList = () => {
  return (
    <div className={classNames("play-list")}>
      <div className="header">
        <div className="row">
          <QueueMusic className="list" />
          <span>Playlist</span>
        </div>
        <Close sx={{ fontSize: 22, cursor: "pointer" }} />
      </div>
      <ul>
        {MusicList.map((item, index) => (
          <li key={index}>
            <PlayListItem item={item} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayList;
