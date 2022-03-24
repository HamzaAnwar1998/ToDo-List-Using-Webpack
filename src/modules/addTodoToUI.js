const addTodoToUI = (todo, index) => {
  document.querySelector('.todo-container').innerHTML += `
    <li class="todo">
    <div class="left">
      <input type="checkbox" ${todo.Completed ? 'checked' : 'unchecked'}/>
      <span>${todo.Description}</span>
    </div>
    <div class="right">
      <span class="fa-solid fa-trash fa-lg elippse-icon remove-btn"
      id="${index}">
      </span>
    </div>
  </li>      
        `;
};

// eslint-disable-next-line import/prefer-default-export
export { addTodoToUI };