import "./App.scss";
import SongDetail from "./components/SongDetail/SongDetail";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Controls from "./components/Controls/Controls";
import PlayList from "./components/PlayList/PlayList";
import { useRef } from "react";
function App() {
  const audioRef = useRef();
  const onPlay = () => {
    audioRef.current.play();
  };
  const onPause = () => {
    audioRef.current.pause();
  };
  const changeVolume = (volume) => {
    audioRef.current.changeVolume(volume);
  };
  return (
    <div className="App">
      <div className="container">
        <SongDetail />
        <ProgressBar ref={audioRef} />
        <Controls play={onPlay} pause={onPause} changeVolume={changeVolume} />
        <PlayList />
      </div>
    </div>
  );
}

export default App;
