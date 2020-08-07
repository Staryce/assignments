// console.log(process.argv.slice(2).map(Number).reduce((acc, x)=> + x))

let sum = 0
for (let i = 2; i < process.argv.length; i++) {
    const x = Number(process.argv[i])
    sum += x
    
}

console.log(sum)