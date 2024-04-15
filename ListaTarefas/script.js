function addTask() {
    var taskDescription = document.getElementById('taskDescription').value;
 
    if (taskDescription.trim() !== '') {
        var taskList = document.getElementById('tasks');
        var newTask = document.createElement('li');
        newTask.innerHTML = taskDescription + ' <button onclick="removeTask(this)">Remover</button>';
        newTask.onclick = function() {
            this.classList.toggle('completed');
        };
        taskList.appendChild(newTask);
        document.getElementById('taskDescription').value = '';
    } else {
        alert('Por favor, digite a descrição da tarefa.');
    }
}


function removeTask(taskElement) {
    taskElement.parentNode.remove();
}

document.getElementById('addTaskForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    addTask();
}); 

document.getElementById('addTaskButton').addEventListener('click', addTask);