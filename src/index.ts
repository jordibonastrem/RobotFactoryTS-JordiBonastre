enum TypeOfRobot {
  Cleaner,
  Waiter,
  Developer,
}

type Battery = {
  quantity: number;
  percent: string;
};

interface IRobotsFactory {
  name: string;
  type: TypeOfRobot;
  battery: Battery;
  work: void;
}
const generateRandomName = () => {
  let name = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  for (let i = 0; i < 3; i++) {
    name += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  for (let i = 0; i < 2; i++) {
    name += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return name;
};
function trabajar(robotType: TypeOfRobot) {
  if (robotType === TypeOfRobot.Cleaner) {
    console.log("Larala larita, I clean my little house");
  } else if (robotType === TypeOfRobot.Developer) {
    console.log("Do you feel like a mini of fuet?");
  } else if (robotType === TypeOfRobot.Waiter) {
    console.log("JavaScript is cool -> I develop with JavaScript -> I'm cool");
  }
}

let robot1: IRobotsFactory = {
  name: generateRandomName(),
  type: TypeOfRobot.Cleaner,
  battery: {
    quantity: 1,
    percent: "%",
  },
  work: trabajar(TypeOfRobot.Waiter),
};

console.log(robot1);
