export const UPDATE_SCOREBOARD = 'UPDATE_SCOREBOARD';

export function scoreboard(scoreboard = [], action) {
  if(action.type = UPDATE_SCOREBOARD){
    return action.payload;
  } else {
    return scoreboard;
  }
}