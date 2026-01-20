const input5 = +process.argv[2]

if (isNaN(input5) || input5 < 1) {
    console.log("Invalid Input");
    process.exit()
}

for (let i = 1; i <= input5; i++) {
    if (i % 21 === 0) {
        console.log("FooBar");   
    }
    else if (i % 3 === 0) {
        console.log("Foo");
    }
    else if (i % 7 === 0) {
        console.log("Bar");
    }
    else {
        console.log(i);
    }
}