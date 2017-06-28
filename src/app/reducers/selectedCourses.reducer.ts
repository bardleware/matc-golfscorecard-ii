export const UPDATE_SELECTED_COURSE = 'UPDATE_SELECTED_COURSE';

export function scoreboard(selectedCourse = [], action) {
  if(action.type = UPDATE_SELECTED_COURSE){
    return action.payload;
  } else {
    return selectedCourse;
  }
}