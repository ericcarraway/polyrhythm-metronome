import Sampler from "../audio/sampler";

const initState = {
  tempo: 100,
  play: false,
  mute: { outside: false, inside: false },
  subdivision: { outside: 4, inside: 3 },
  sampler: new Sampler()
};

const rootReducer = (state = initState, action) => {
  if (action.type === "SET_TEMPO") {
    return {
      ...state,
      tempo: action.tempo
    };
  }

  if (action.type === "SET_PLAY") {
    return {
      ...state,
      play: action.play
    };
  }

  if (action.type === "SET_MUTE") {
    let mute = state.mute;
    if (action.side === "outside") {
      mute.outside = action.mute;
    } else if (action.side === "inside") {
      mute.inside = action.mute;
    }
    return {
      ...state,
      mute: mute
    };
  }

  if (action.type === "SET_SUBDIVISION") {
    return {
      ...state,
      subdivision: { ...state.subdivision, [action.side]: action.subdivision }
    };
  }

  return state;
};

export default rootReducer;
