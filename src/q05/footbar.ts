const input5 = +process.argv[2]

<<<<<<< HEAD
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
=======
if (input5 > 0) {
    for (let i = 1; i <= input5 ; i++) {
    if (i % 3 === 0) {
    console.log("Foo")
}
    else if (i % 7 === 0) {
        console.log("Bar")
    }
    else if (i % 21 === 0) {
        console.log("FooBar")
    }
    else {
        console.log(i)
    }
}
}
else {
    console.log("Invalid Input")
}



>>>>>>> 8649abb32e17c75082beb0e1014cbe898e663a0f
