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
const NEXT_MUSIC = "musicPlayer/NEXT_MUSIC";
const PREV_MUSIC = "musicPlayer/PREV_MUSIC";
const SET_REPEAT = "musicPlayer/SET_REPEAT";
const SET_CURRENT_INDEX = "musicPlayer/SET_CURRENT_INDEX";

//액션 크리에이터
const repeatMode = ["ONE", "ALL", "SHUFFLE"];
export const playMusic = () => ({ type: PLAY_MUSIC });
export const stopMusic = () => ({ type: STOP_MUSIC });
export const nextMusic = () => ({ type: NEXT_MUSIC });
export const prevMusic = () => ({ type: PREV_MUSIC });
export const setRepeat = () => ({ type: SET_REPEAT });
export const setCurrentIndex = (index) => ({ type: SET_CURRENT_INDEX, index });

const getRandomNum = (arr, excludeNum) => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber] === excludeNum
    ? getRandomNum(arr, excludeNum)
    : arr[randomNumber];
};

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
    case NEXT_MUSIC:
      const nextIndex =
        state.repeat === "SHUFFLE"
          ? getRandomNum(
              Array.from(Array(playList.length).keys()),
              state.currentIndex
            )
          : (state.currentIndex + 1) % state.playList.length;
      return {
        ...state,
        currentIndex: nextIndex,
        currentMusicId: state.playList[nextIndex].id,
      };
    case PREV_MUSIC:
      const prevIndex =
        state.repeat === "SHUFFLE"
          ? getRandomNum(
              Array.from(Array(playList.length).keys()),
              state.currentIndex
            )
          : (state.currentIndex - 1 + state.playList.length) %
            state.playList.length;
      return {
        ...state,
        currentIndex: prevIndex,
        currentMusicId: state.playList[prevIndex].id,
      };
    case SET_REPEAT:
      return {
        ...state,
        repeat:
          repeatMode[
            (repeatMode.indexOf(state.repeat) + 1) % repeatMode.length
          ],
      };
    case SET_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: action.index,
        currentMusicId: state.playList[action.index].id,
      };
    default:
      return state;
  }
}
