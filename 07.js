const numbers = [9,4,2,4,1,5,3,0] 

function sortOddsOnly(arr) {
    const odds = arr
        .filter(x => x%2)
        .sort((a, b) => a - b);
        
    return arr
        .map(x => x%2 ? odds.shift() : x);
}

console.log(sortOddsOnly(numbers));