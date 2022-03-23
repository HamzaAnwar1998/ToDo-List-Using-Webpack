import './styles.css';

const element = document.querySelector('.todo-container');

const todos = [
  { ID: 0, description: 'Learn React', completed: true },
  { ID: 1, description: "Complete Today's task", completed: false },
  { ID: 2, description: 'Learn Firebase', completed: true },
];

todos.forEach((todo) => {
  todos.sort((a, b) => a.index - b.index);
  element.innerHTML += `
      <li class="todo" id="${todo.ID}">
        <div class="left">
          <input type="checkbox" ${todo.completed ? 'checked' : 'unchecked'}/>
          <span>${todo.description}</span>
        </div>
        <div class="right">
          <span class="elippse-icon">
            <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
          </span>
        </div>
      </li>      
  `;
});