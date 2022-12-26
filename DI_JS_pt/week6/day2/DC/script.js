const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

   let usernames = [];

   gameInfo.forEach((i)=>usernames.push(`${i["username"]}!`));

   console.log(usernames);


let winners = [];
gameInfo.forEach((i)=> i['score']>5 && winners.push(i["username"]));
console.log(winners);

let sum=0;
gameInfo.forEach((i)=> sum += i['score']);
console.log(sum);