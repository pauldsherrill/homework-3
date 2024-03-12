# Employee Payroll Tracker

## Description

In this project, I was tasked with implementing Javascript code into a JS file so that the user would be prompted with options to add information about employees. From that information, I was tasked with creating an array with the objects the user inputted. From there, I was tasked with calculating abd displaying the average salary out of the inputted salaries of the employees and also choosing one of the employees at random.

## Installation

To install my code, I opened a given Javascript file that had starter code installed already. After viewing the code, I realized all I needed to do was add code to prompt the user for employee information, create an array with that information, calculate an average out of the array, and then choose a random out of that array as well. To start, I added a const called "employee" with three different categories: first name, last name, salary. All of these values were left blank so that the user input would replace it. I then added another const called "employees" to store multiple employees into one array. I then implemented prompts for each of the different categories under the employee variable so that the user would be asked to fill in employee information after clicking "Add Employee". I then added the .push command to push that inputted information into one array (employees). I then added an if statement so that if a user inputted anything other than a number for the salary prompt, it would display a 0. In order for the user to add multiple employees, I had to create a while loop so that the following code would run until the user didn't confirm that they wanted to add another employee. In that while loop I just copied and pasted all my previous code so that it would be repeated the exact same way. I then returned the array.

Now that I had created an array of employees, I now needed to calculate the average salary of those inputted salaries and display it into the console. I started by creating a function and addimng a sum that was equal to 0 in it. Next, I added a for loop with an integer(i) that added the sum to the total sum of salaries. To calculate the average, I divided the sum by the length of array of salaries. I then logged that number into the console for it to be displayed.

My last task was to randomly choose one of the employees. I did so by using the Math.random command to choose a random number between 0 and 1 to multiply to the length of my arrays. However, this wasn't working because it would not always calculate a whole number. Therefore, I used the Math.floor command to round these numbers down and make them whole integers. I then logged this into the console and it worked.

## Usage

To access the webpage visit file:///C:/Users/sherr/repo/homework-3

Once you arrive, you will see a blank table and a button that says "Add Employee". 

![alt text](assets/opening.png)

By clicking this button, you will be prompted with an area to fill out an employee's first name. After clicking submit, a new prompt will give you the option to fill out the employee's last name. Likewise when you click submit, you will be promted with an area to fill out the employee's salary. After submitting once again, you will be given the option to add another employee or cancel. 

![alt text](assets/prompt.png)

Adding another employee will repeat these prompts and cancelling will return you to the page with the table filled out with the informtaion you just inputted. 

![alt text](assets/tablefilled.png)

To view the average salary and random employee chosen, right click and inspect the page. There you will see that logged into the console. 

![alt text](assets/console.png)

