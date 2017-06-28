// let obj = {
//   courseList: [],
//   selectedCourse: {
//     id: number,
//     info: {},
//   },
//   players: [
//     {
//       name: string,
//       scorecard: [],
//     }
//   ],
//   scoreboard: []
// }

function scoreboard(scoreboard = []) {
  let orderedArr = [];
  let sorting = true;
  do {
    // sorting = false;
    for (let i = 0; i < scoreboard.length -1; i++) {
      console.log(`${scoreboard[i]} > ${scoreboard[i + 1]}`)
      if (scoreboard[i] > scoreboard[i + 1]) {
        orderedArr.push(scoreboard[i + 1])
        sorting++;
      }
    }
  } while (sorting < 25)

  console.log(orderedArr);
}

scoreboard([9,7,6,4,5,3,2]);