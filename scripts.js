document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addTodo();
});

function addTodo() {
    const newTodoInput = document.getElementById('new-todo');
    const todoText = newTodoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');

        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';

        const todoTextSpan = document.createElement('span');
        todoTextSpan.textContent = todoText;

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'todo-actions';

        const completeBtn = document.createElement('button');
        completeBtn.className = 'action-btn complete-btn';
        completeBtn.textContent = 'Complete';
        completeBtn.onclick = function() {
            todoItem.classList.toggle('completed');
        };

        const updateBtn = document.createElement('button');
        updateBtn.className = 'action-btn update-btn';
        updateBtn.textContent = 'Edit';
        updateBtn.onclick = function() {
            const updatedText = prompt('Edit the task:', todoTextSpan.textContent);
            if (updatedText !== null && updatedText.trim() !== '') {
                todoTextSpan.textContent = updatedText.trim();
            }
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'action-btn delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            todoList.removeChild(todoItem);
        };

        actionsDiv.appendChild(completeBtn);
        actionsDiv.appendChild(updateBtn);
        actionsDiv.appendChild(deleteBtn);

        todoItem.appendChild(todoTextSpan);
        todoItem.appendChild(actionsDiv);
        todoList.appendChild(todoItem);

        newTodoInput.value = '';
        newTodoInput.focus();
    }
}
