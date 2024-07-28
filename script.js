document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new li element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Assign an onclick event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the li element
        listItem.appendChild(removeButton);

        // Append the li element to the taskList
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = "";
    }

    // Add an event listener to addButton that calls addTask when the button is clicked
    addButton.addEventListener('click', addTask);

    // Add an event listener to taskInput for the 'keypress' event to allow tasks to be added by pressing the 'Enter' key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
