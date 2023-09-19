function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">X</button>
        `;
        taskList.appendChild(li);

        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskInput.value = "";
    }
}

function removeTask(button) {
    const taskText = button.parentElement.querySelector("span").textContent;
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const index = tasks.indexOf(taskText);
    if (index !== -1) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        button.parentElement.remove();
    }
}

window.onload = function () {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("task-list");
    for (const taskText of tasks) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(li);
    }
}