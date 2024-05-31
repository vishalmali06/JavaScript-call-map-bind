let name = {
    firstName: "Vishal",
    lastName: "Mali",
}

let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " " + hometown + " " + state)
}

// call method
printFullName.call(name, "Tasgaon", "MH");

let name2 = {
    firstName: "Prajkta",
    lastName: "Mali",
}

// function borrowing 

printFullName.call(name2, "Mumbai", "MH");

// apply method 
printFullName.apply(name2, ["Mumbai", "MH"]);

// bind method 
let printMyName = printFullName.bind(name2, "Tasgaon", "MH");
console.log(printMyName);
printMyName();
