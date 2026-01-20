const input = +process.argv[2]

if (isNaN(input) || input < 0) {
    console.log("Invalid Input");
    process.exit()
}

for (let i= 0; i<input ; i++) {
    let pattern = ''
    for (let s = 0; s < i ; s++) {
        pattern += " "
    }
    for (let k = 0; k < input; k++) {
        pattern += "*"
    }
    console.log(pattern);
    
}
