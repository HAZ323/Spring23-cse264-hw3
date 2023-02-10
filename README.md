##CSE 264 – Web Systems Programming – Spring 2023
##Homework Assignment 3 - Task Manager
##Due Thursday, February 16th, 11:59pm

###Objective
To gain experience creating a simple app that uses Node.js and Express on the server.

###Description
You will create a simple task manager that allows the user to add to and delete tasks from a list.

##How the Task Manager Works
Refer to the file Task_Manager_Image.pdf. The current list of tasks is shown in the table on the left. The form with 2 buttons on the right is used to add and delete tasks. 

To add a task the user does the following:
- Fills in the description field
- Clicks on the date field and selects a date from the datepicker
- Selects one of 5 task types: Next Action, Waiting, Talk, Future, and Someday/Maybe. 
- Finally, the user clicks Add and the new task is added to the list on the left and the form is reset.

To delete one or more tasks, the user does the following:
- Clicks the check boxes of the tasks to be deleted from the table on the left.
- Clicks the Delete button. 
- The tasks are deleted from the list and the task list is refreshed with the updated list of tasks.

###Basic Approach
The list of tasks is held in a collection in the Node script on the server. Each task is contained in a JS object that has a property for each of the task fields (description, date, type) and also a task id. The id is just a number that the node script assigns then the task is created. Assigning consecutive numbers is fine. I would recommend keeping the task objects in another JS object so they can be looked up by their id. This will come in handy when deleting tasks. 

There is only one ejs template page used for the app. When rendered with the collection of tasks, it fills in the task table and sends the html page to the browser. The user starts by doing a get request on the root of the site (localhost:3000/). A router handles the request by calling res.render on the task template and passes it an empty task collection. The page is rendered with an empty table and sent to the browser.

When the user fills in the form with the fields for a new task and clicks the Add button, this submits the form to a different router on the server which creates a new task object and adds the fields from the form as properties of the object, increments the task id counter, stores the new id as a property of the task object and uses it as a key to store the newly created task in the task list object. It then calls the render method with the updated task list object to render the page and send it to the server.

When creating a checkbox on the page, the template should use the task id as it's <i>value</i>. All the checkboxes in the table should have the same <i>name</i> so that when the user clicks the Delete button on the page, the id's of all the selected tasks will be sent to the server. On the server, the router can use those id's to delete tasks from the task list and then call render to send the updated page to the browser.


###Instructions
1. Make sure you have Node.js installed on your computer.

2. Use npm init to create a package.json file.

3. Use npm install with the --save option to install the express, path, and ejs modules.

3a. Do an initial git add, commit, and push.
     
4. Edit the taskmanager.ejs file and create an html template page that looks approximately like Task_Manager_Image.pdf only without any tasks listed in the table. Put an HTML comment at the top of the page with your name, the class name and the homework name.

3. The due date field in the form must use an input type="date" element. This will pop up a calendar for the user to pick a date when the field is clicked on.

4. Make sure that the dropdown on the right contains the 5 task types listed above.

5. Make sure that the form on the right is contained within a form element with method="get" and action="/processform"

6. Set the name attribute for each of the fields in the form. Use meaningful names. Don't name the description field "abc" for instance. This names will be used on the server to retrieve the values with were filled in.

7. Set the name attribute on each of the two buttons (Add and Delete) to "command".

8. When the template is complete, git add, commit and push the project.

9. Edit the app.js file and create two routers, one with the path "/" and the other with the path "/processform". The first router should just call render on the response object and passing it the template name and the empty task list object. Put a comment at the top of the page with your name, the class name and the homework name.

10. The "/processform" router should check the value of the "command" query param to see if we are doing an add or a delete. The logic for each of these cases is described above.

11. Do another git add, commit, push.

12. Test your app by running node app.js and typing localhost:3000 in the browser address bar. Try adding and deleting tasks until you are satisfied the program works.

13 Do your final git add, commit, push.

     


