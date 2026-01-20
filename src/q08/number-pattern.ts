const input = +process.argv[2]

if (isNaN(input)) {
    console.log("Invalid Input");
    process.exit()
}

for (let i = input; i >= 1; i--) {
  let pattern = ""
  
  for (let j = i; j >= 1; j-- ) {
    pattern += j
  }   

  console.log(pattern);
  
}