
// Q 2 part a) + b)
let dataRep = (name) => {
    return name;
}

console.log("Data Representation & Querying with " + dataRep("Shane"));


// Q 2 part c)
let sum = (n1,n2) => {
    n3 = n1+n2;
    return n3;
}

console.log(sum(5,6));

// Q 2 part d)
const ages = [25, 31, 42, 77];

let multiply = ages.map((item)=> {
    if(item < 70)
        return item * 2;
    else
        return item;
})

console.log(multiply);



