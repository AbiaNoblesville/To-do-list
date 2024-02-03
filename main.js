function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var taskItem = document.createElement("li");
        taskItem.className = "taskItem";

        var taskText = document.createTextNode(taskInput.value);
        taskItem.appendChild(taskText);

        var removeTaskBtn = document.createElement("span");
        removeTaskBtn.className = "removeTaskBtn";
        removeTaskBtn.innerHTML = "Remove";
        removeTaskBtn.onclick = function () {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(removeTaskBtn);
        taskList.appendChild(taskItem);

        taskInput.value = "";
    }
} 
