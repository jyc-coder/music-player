import img1 from "../images/music-1.jpg";
import img2 from "../images/music-2.jpg";
import img3 from "../images/music-3.jpg";
import img4 from "../images/music-4.png";
import img5 from "../images/music-5.png";

import music1 from "../music/music-1.mp3";
import music2 from "../music/music-2.mp3";
import music3 from "../music/music-3.mp3";
import music4 from "../music/music-4.mp3";
import music5 from "../music/music-5.mp3";

const playList = [
  {
    name: "Milk Shake",
    artist: "Coma-Media",
    img: img1,
    music: music1,
    id: 1,
  },
  {
    name: "Goldn",
    artist: "parazkhanal",
    img: img2,
    music: music2,
    id: 2,
  },
  {
    name: "Elextronic Future Beats",
    artist: "QubeSounds",
    img: img3,
    music: music3,
    id: 3,
  },
  {
    name: "Tuesday(Glitch Soft Hip-hop)",
    artist: "amaksi",
    img: img4,
    music: music4,
    id: 4,
  },
  {
    name: "The Blackest Bouquet",
    artist: "Leonell Cassio",
    img: img5,
    music: music5,
    id: 5,
  },
];

const initialState = {
  playList,
  currentMusicId: playList[0].id,
  currentIndex: 0,
  playing: false,
  repeat: "ALL", //ONE, SHUFFLE
};

//액션 타입 생성
const PLAY_MUSIC = "musicPlayer/PLAY_MUSIC";
const STOP_MUSIC = "musicPlayer/STOP_MUSIC";

//액션 크리에이터
export const playMusic = () => ({ type: PLAY_MUSIC });
export const stopMusic = () => ({ type: STOP_MUSIC });

//리듀서
export default function musicPlayerReducer(state = initialState, action) {
  switch (action.type) {
    case PLAY_MUSIC:
      return {
        ...state,
        playing: true,
      };
    case STOP_MUSIC:
      return {
        ...state,
        playing: false,
      };
    default:
      return state;
  }
}
