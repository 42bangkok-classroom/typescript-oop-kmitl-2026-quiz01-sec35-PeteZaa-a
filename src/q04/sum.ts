const n = +process.argv[2]

let sum = 0

if (isNaN(n) || n < 0) {
    console.log("Invalid Input")
    process.exit()
}


for (let i = 1; i <= n; i++) {
    sum += i    
}
console.log(sum)
