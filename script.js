// getElementById selects a HTML element by it's id.
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// It is possible to create an empty array to store elments in a array which is helpful in imputl applications.
let tasks = [];

// Function to add a task
function addTask() {
  // Trim removes whitespace from both ends of a string.
  // .value is used to read and set values from form elments like <input>, <textarea>, and <select>.
  const task = taskInput.value.trim();

  if (task !== "") {
    tasks.push(task); // Add task to the array using push()
    renderTasks(); // Update the task list
    taskInput.value = ""; // Clear the input field
  } else {
    alert("Please enter a task!");
  }
}

// Function to render tasks
function renderTasks() {
  taskList.innerHTML = ""; // Clear current tasks

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    // Add a delete button to each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
      tasks.splice(index, 1); // Remove task from array
      renderTasks(); // Update task list
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

// Event listener for the "Add Task" button
addTaskButton.addEventListener("click", addTask);
