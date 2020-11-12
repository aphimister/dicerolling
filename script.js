
const diceRoller = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

let myVar = diceRoller();

rolling = setInterval(console.log(myVar), 500);
