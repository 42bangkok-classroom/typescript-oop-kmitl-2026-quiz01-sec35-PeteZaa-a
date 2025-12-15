const input2 = +process.argv[2]
const input2_1 = +process.argv[3]

if (isNaN(input2 || input2_1)) {
    console.log("Invalid Input")
}
else {
    if (input2_1 > 5000) {
        console.log("Exceeds per-withdrawal limit")
    }
    else if (input2 > input2_1) {
        console.log("Insufficient balance")
    }
    else {
        console.log("withdraw approved")
    }


}

