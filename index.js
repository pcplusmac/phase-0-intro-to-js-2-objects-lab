// Write your solution in this file!
// Define an array for all employees
const employee = {
    name: "Alex",
    streetAddress: { 
        number: 15,
        stree: "Kudos Road",
        city: "Byford",
        postcode: 1124
    }   
    ,
};

// Define function for update the object non-destructively 
function updateEmployeeWithKeyAndValue(employee,key, value){
    // Create a copy of the original object
    const newEmployee = {...employee};
    newEmployee[key] = value; 
    return newEmployee;
}

// Define function for update the object destructively 
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key, value){
    employee[key] = value;
    return employee;
}

