// Write your solution in this file!
// Create an object for all employees using literal syntax
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

// Define function for removing property of object non-destructively
function deleteFromEmployeeByKey(employee,key){
    const newEmployee = {...employee};
    delete newEmployee[key]; 
    return newEmployee;
}

// Define funciton for removing the property in the original object
function destructivelyDeleteFromEmployeeByKey(employee,key){
    
    delete employee[key]; 
    return employee;
}