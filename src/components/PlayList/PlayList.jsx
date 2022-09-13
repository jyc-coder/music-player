import React from "react";
import classNames from "classnames";
import { Close, QueueMusic } from "@mui/icons-material";
import PlayListItem from "./PlayListItem";
import "./PlayList.scss";
import SortableList from "@jyc-coder/sortable";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentIndex,
  updatePlayList,
} from "../../store/musicPlayerReducer";

const PlayList = ({ showPlayList, setshowPlayList }) => {
  const playList = useSelector((state) => state.playList);
  const dispatch = useDispatch();
  const onClickClosePlayList = () => {
    setshowPlayList(false);
  };

  const renderItem = (item, index) => (
    <PlayListItem item={item} index={index} />
  );

  const onClickItem = (index) => {
    dispatch(setCurrentIndex(index));
  };

  const onDropItem = (newPlayList) => {
    dispatch(updatePlayList(newPlayList));
  };

  return (
    <div className={classNames("play-list", { show: showPlayList })}>
      <div className="header">
        <div className="row">
          <QueueMusic className="list" />
          <span>Playlist</span>
        </div>
        <Close
          sx={{ fontSize: 22, cursor: "pointer" }}
          onClick={onClickClosePlayList}
        />
      </div>
      <SortableList
        data={playList}
        renderItem={renderItem}
        onClickItem={onClickItem}
        onDropItem={onDropItem}
      />
    </div>
  );
};

export default PlayList;
