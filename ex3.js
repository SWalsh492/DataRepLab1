
//Q 3 part a)
const myStr = ["Bruce Wayne", "Clarke Kent"]; // Array of strings


//Q 3 part b)
// Adds string taken as an argument to the array
let addTask = (task) => {
    myStr.push(task);
    console.log(task + " was added to the array");
    console.log(myStr.length);
}

addTask("Lois Lane");

//Q3 part c)
// iterates through the array using a map function and returns each
let listAllTask = myStr.map((name)=> {
    return name;
})

console.log(listAllTask);

//Q3 part d)
// deletes string chosen from argument from the array
let deleteTask = (task) => {
    let delPos = myStr.indexOf(task);
    if(delPos > -1){
        myStr.splice(delPos,1);
        console.log(task + " was removed from the array");
        console.log(myStr.length);
        console.log(myStr);
    }
    else {
        console.log(task + " is not present in array");
    }
    
}

deleteTask("Clarke Kent"); // deletes Clarke Kent
deleteTask("Peter Parker"); // fails to delete Peter Parker, not present 

