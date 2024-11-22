
        function addTask() {
            const taskInput = document.getElementById('new-task');
            const taskText = taskInput.value.trim();
            if (taskText === '') return;

            const taskList = document.getElementById('task-list');
            const newTask = document.createElement('li');
            newTask.textContent = taskText;

            const taskButtons = document.createElement('div');
            taskButtons.className = 'task-buttons';

            const checkButton = document.createElement('button');
            checkButton.textContent = '✔';
            checkButton.onclick = () => checkTask(checkButton);

            const uncheckButton = document.createElement('button');
            uncheckButton.textContent = '✖';
            uncheckButton.onclick = () => uncheckTask(uncheckButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '🗑';
            deleteButton.onclick = () => deleteTask(deleteButton);

            taskButtons.appendChild(checkButton);
            taskButtons.appendChild(uncheckButton);
            taskButtons.appendChild(deleteButton);

            newTask.appendChild(taskButtons);
            taskList.appendChild(newTask);

            taskInput.value = '';
        }

        function checkTask(button) {
            const task = button.parentElement.parentElement;
            task.style.textDecoration = 'line-through';
        }

        function uncheckTask(button) {
            const task = button.parentElement.parentElement;
            task.style.textDecoration = 'none';
        }

        function deleteTask(button) {
            const task = button.parentElement.parentElement;
            task.remove();
        }