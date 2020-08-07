function logItems(array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i])
    }
    
}

// logItems(['apple', 'banana', 'orange'])

function logeveryOther(array) {
    for (let i = 0; i < array.length; i++){
        if (i % 2 == 0){
            console.log(array[i])
        } 
        
    }
}
// logeveryOther([1, 2, 3, 4, 5])

function timesTwo(array){
    for (let i = 0; i < array.length; i++) {
        const newNumber = (array[i] * 2)
        console.log(newNumber)
    }
}
// timesTwo([1, 2, 4, 6, 8])

function doubleEveryOther(array) {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0){
        let everyOther = array[i]
            console.log(everyOther * 2)
        }
    }

}
// doubleEveryOther([1, 2, 3, 4, 5, 6, 7])

function squareEverything(array){
    for(i = 0; i < array.length; i++){
    const squareNumber = array[i]*array[i]
        console.log(squareNumber)
    }
}

// squareEverything([1, 2, 3, 4, 5])

function stringCase(array){
    for (let i = 0; i < array.length; i++){
    const nameUpper = array[i].toUpperCase()
        console.log(nameUpper)
    }
    
}
stringCase(['mary', 'lou', 'bob'])


