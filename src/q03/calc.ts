const operators = process.argv[2]
const num1 = +process.argv[3]
const num2 = +process.argv[4]

if (isNaN(num1 || num2) ) {
    console.log("Invalid input");
    process.exit()
}

switch (operators) {
    case "add":
        console.log(num1+num2);
        break;
    case "sub":
        console.log(num1-num2);
        break;
    case "mul":
        console.log(num1*num2);
        break;
    case "div":
        if (num2 === 0) {
            console.log("Invalid input");
            process.exit()
        }
        console.log(num1/num2);
        break;
    default:
        console.log("Invalid operator");
        break;
}