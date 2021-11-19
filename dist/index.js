var TypeOfRobot;
(function (TypeOfRobot) {
    TypeOfRobot[TypeOfRobot["Cleaner"] = 0] = "Cleaner";
    TypeOfRobot[TypeOfRobot["Waiter"] = 1] = "Waiter";
    TypeOfRobot[TypeOfRobot["Developer"] = 2] = "Developer";
})(TypeOfRobot || (TypeOfRobot = {}));
var generateRandomName = function () {
    var name = "";
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    for (var i = 0; i < 3; i++) {
        name += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (var i = 0; i < 2; i++) {
        name += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return name;
};
function trabajar(robotType) {
    if (robotType === TypeOfRobot.Cleaner) {
        console.log("Larala larita, I clean my little house");
    }
    else if (robotType === TypeOfRobot.Developer) {
        console.log("Do you feel like a mini of fuet?");
    }
    else if (robotType === TypeOfRobot.Waiter) {
        console.log("JavaScript is cool -> I develop with JavaScript -> I'm cool");
    }
}
var robot1 = {
    name: generateRandomName(),
    type: TypeOfRobot.Cleaner.valueOf(),
    battery: {
        quantity: 1,
        percent: "%"
    },
    work: trabajar(TypeOfRobot.Waiter)
};
console.log(robot1);
