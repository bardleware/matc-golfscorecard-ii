export const UPDATE_GOLF_COURSE_LIST = 'UPDATE_GOLF_COURSE_LIST';
export const SELECT_COURSE = 'SELECT_COURSE';


export function scorecard(scorecard = {}, action){
  return{
    courseList: [],
    selectedCourse: {},
    players:[],
    scoreboard:[]
  }
}