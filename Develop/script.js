// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employee = {
    firstName: "",
    lastName: "",
    salary: 0
  }

  const employees = [];

  employee.firstName = prompt("Enter first name:");
  employee.lastName = prompt("Enter last name:");
  employee.salary = prompt("Enter salary:");

  // Display non-numbers as 0
  if (isNaN(employee.salary)) {
    employee.salary = 0;
  } else {
    employee.salary = parseInt(employee.salary);
  }

  employees.push(employee);

  while (confirm("Would you like to add another employee?")) {
    const employee = {
      firstName: "",
      lastName: "",
      salary: 0
    }

    employee.firstName = prompt("Enter first name:");
    employee.lastName = prompt("Enter last name:");
    employee.salary = prompt("Enter salary:");

    if (!isNaN(employee.salary) < 0) {
      employee.salary = 0;
    } else {
      employee.salary = parseInt(employee.salary);
    }
  
    employees.push(employee);
  }

  return employees;
}

// Display the average salary
const displayAverageSalary = function(collectEmployees) {
    let sum = 0;
    console.log(collectEmployees);

    // Calculate the sum
    for (let i = 0; i < collectEmployees.length; i++) {
      sum += collectEmployees[i].salary
    }
    // Calculate the average
    let average = sum / collectEmployees.length;

    console.log("The average salary of our employees is $" + average);
}

// Select a random employee
const getRandomEmployee = function(collectEmployees) {
  let randomNumber = Math.random() * collectEmployees.length;
  let randomInteger = Math.floor(randomNumber);
  console.log("Congratulations, " + collectEmployees[randomInteger].firstName + ", our random drawing winner!");
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
