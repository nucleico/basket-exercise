import {
  GET_PLAYERS,
  ADD_PLAYER,
  ADD_SHOT,
  DELETE_PLAYER,
  DELETE_SHOT,
  SET_PLAYERS,
} from './types';

export const getPlayers = (players) => {
  return {
    type: GET_PLAYERS,
    payload: players,
  };
};

export const setPlayers = (players) => {
  return {
    type: SET_PLAYERS,
    payload: players,
  };
};

export const addPlayer = (player) => {
  return {
    type: ADD_PLAYER,
    payload: player,
  };
};

export const deletePlayer = (legajo) => {
  return {
    type: DELETE_PLAYER,
    payload: legajo,
  };
};

export const addShot = (shot) => {
  return {
    type: ADD_SHOT,
    payload: shot,
  };
};

export const deleteShot = (id) => {
  return {
    type: DELETE_SHOT,
    payload: id,
  };
};
