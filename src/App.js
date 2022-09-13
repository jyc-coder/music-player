import "./App.scss";
import SongDetail from "./components/SongDetail/SongDetail";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Controls from "./components/Controls/Controls";
import PlayList from "./components/PlayList/PlayList";
import { useRef, useState } from "react";
function App() {
  const audioRef = useRef();
  const [showPlayList, setshowPlayList] = useState(false);
  const onPlay = () => {
    audioRef.current.play();
  };
  const onPause = () => {
    audioRef.current.pause();
  };
  const changeVolume = (volume) => {
    audioRef.current.changeVolume(volume);
  };
  const resetDuration = () => {
    audioRef.current.resetDuration();
  };
  return (
    <div className="App">
      <div className="container">
        <SongDetail />
        <ProgressBar ref={audioRef} />
        <Controls
          play={onPlay}
          pause={onPause}
          changeVolume={changeVolume}
          resetDuration={resetDuration}
          setshowPlayList={setshowPlayList}
        />
        <PlayList
          showPlayList={showPlayList}
          setshowPlayList={setshowPlayList}
        />
      </div>
    </div>
  );
}

export default App;
