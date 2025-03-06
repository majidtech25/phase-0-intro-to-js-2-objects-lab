// Write your solution in this file!
// Step 1: Create the employee Object
const employee = {
  name: "John Doe",
  streetAddress: "123 Main St",
};

// Function 1: Non-destructive update
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}

// Function 2: Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function 3: Non-destructive delete
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee }; // Clone employee object
  delete newEmployee[key]; // Delete key without changing original
  return newEmployee;
}

// Function 4: Destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]; // Delete key from original object
  return employee;
}

// Example usage
console.log(
  updateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St")
); // Non-destructive
console.log(employee); // Original stays the same

console.log(
  destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "789 Oak St"
  )
); // Destructive
console.log(employee); // Original changes

console.log(deleteFromEmployeeByKey(employee, "name")); // Non-destructive delete
console.log(employee); // Original remains intact

console.log(destructivelyDeleteFromEmployeeByKey(employee, "name")); // Destructive delete
console.log(employee); // Original loses the 'name' key
