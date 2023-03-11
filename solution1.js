const x = {name:"joy", age:40};
const string = JSON.stringify(x);
localStorage.setItem("obj",string)

const y = {name:"jon", age:14};
const strngY = JSON.stringify(y);
localStorage.setItem("Vai", strngY)

console.log(JSON.parse(strngY));