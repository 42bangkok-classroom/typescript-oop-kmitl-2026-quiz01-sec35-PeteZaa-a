const input5 = +process.argv[2]

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



