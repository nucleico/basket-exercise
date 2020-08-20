import {
  GET_PLAYERS,
  ADD_PLAYER,
  ADD_SHOT,
  DELETE_PLAYER,
  DELETE_SHOT,
  SET_PLAYERS,
} from '../actions/types';

const initialState = {
  shots: [],
  players: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYERS: {
      return {
        ...state,
        players: action.payload,
      };
    }
    case SET_PLAYERS: {
      return {
        ...state,
        players: action.payload,
      };
    }
    case ADD_PLAYER: {
      return {
        ...state,
        players: [...state.players, action.payload],
      };
    }
    case DELETE_PLAYER: {
      return {
        ...state,
        players: state.players.filter(
          (player) => player.legajo !== action.payload
        ),
      };
    }
    case ADD_SHOT: {
      return {
        ...state,
        shots: [...state.shots, action.payload],
      };
    }
    case DELETE_SHOT: {
      return {
        ...state,
        shots: state.shots.filter((shot) => shot.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
