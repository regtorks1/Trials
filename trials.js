const newArray = [1000, 2000, 3000, 4000, 5000, 6000]

const newArrayAfter = newArray.map(arrayNew => {
    return arrayNew/100
})

console.log(newArrayAfter)