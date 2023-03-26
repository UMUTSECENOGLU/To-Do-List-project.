const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const todoText = input.value.trim();
  if (todoText !== '') {
    const todoItem = document.createElement('li');
    todoItem.innerHTML = `
      <span class="todo-text">${todoText}</span>
      <div class="buttons">
        <button class="done-btn">Done</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;
    todoList.appendChild(todoItem);
    input.value = '';
  }
});

todoList.addEventListener('click', function(event) {
  const target = event.target;
  if (target.classList.contains('done-btn')) {
    const todoItem = target.parentElement.parentElement;
    todoItem.classList.toggle('done');
  } else if (target.classList.contains('delete-btn')) {
    const todoItem = target.parentElement.parentElement;
    todoList.removeChild(todoItem);
  }
});
