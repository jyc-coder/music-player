import "./App.scss";
import SongDetail from "./components/SongDetail/SongDetail";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Controls from "./components/Controls/Controls";
import PlayList from "./components/PlayList/PlayList";
function App() {
  return (
    <div className="App">
      <div className="container">
        <SongDetail />
        <ProgressBar />
        <Controls />
        <PlayList />
      </div>
    </div>
  );
}

export default App;
