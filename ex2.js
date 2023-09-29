
// Q 2 part a) + b)
// takes in a variable and outputs to console
let dataRep = (name) => {
    return name;
}

console.log("Data Representation & Querying with " + dataRep("Shane"));


// Q 2 part c)
// Takes in 2 numbers, adds them together and returns the sum
let sum = (n1,n2) => {
    n3 = n1+n2;
    return n3;
}

console.log(sum(5,6));

// Q 2 part d)
const ages = [25, 31, 42, 77]; // Array of nums

// Iterates through the array using a map function, any under 70 is multiplied
let multiply = ages.map((item)=> {
    if(item < 70)
        return item * 2;
    else
        return item;
})

console.log(multiply);



