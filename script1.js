// script.js

// Sample initial task data
let tasks = [
    
    // ... more tasks
];

// Function to add a task
function addTask() {
    const inputBox = document.getElementById("input-box");
    const taskText = inputBox.value.trim();
    if (taskText === "") return;

    const newTask = { text: taskText };
    tasks.push(newTask);
    inputBox.value = "";
    renderTasks();
}

// Function to render tasks
function renderTasks() {
    const listContainer = document.getElementById("list-container");
    listContainer.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteTask(index)); // Call deleteTask() function

        li.appendChild(deleteButton); // Append the delete button to the task item
        li.addEventListener("dblclick", () => editTask(index));

        listContainer.appendChild(li);
    });
}

// Function to sort tasks alphabetically
function sortTasks() {
    tasks.sort((a, b) => a.text.localeCompare(b.text));
    renderTasks();
}

// Function to search tasks
function searchTasks() {
    const searchInput = document.getElementById("search-input");
    const searchText = searchInput.value.trim().toLowerCase();

    if (searchText === "") {
        renderTasks();
        return;
    }

    const filteredTasks = tasks.filter(task => task.text.toLowerCase().includes(searchText));
    tasks = filteredTasks;
    renderTasks();
}







function editTask(index) {
    const taskText = tasks[index].text;
    const newTaskText = prompt("Edit task:", taskText);

    if (newTaskText !== null) {
        tasks[index].text = newTaskText.trim();
        renderTasks();
    }
}

// Initial rendering of tasks
renderTasks();





function deleteTask(index) {
    tasks.splice(index, 1); // Remove the task at the specified index
    renderTasks(); // Update the task list
}
