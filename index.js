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

function updateEmployeeWithKeyAndValue(employee,key, value){
    // Create a copy of the original object
    const newEmployee = {...employee};
    newEmployee[key] = value; 
    return newEmployee;
}



