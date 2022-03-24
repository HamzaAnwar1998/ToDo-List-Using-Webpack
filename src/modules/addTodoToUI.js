const addTodoToUI = (todo) => {
  document.querySelector('.todo-container').innerHTML += `
    <li class="todo" id="${todo.ID}">
    <div class="left">
      <input type="checkbox" ${todo.Completed ? 'checked' : 'unchecked'}/>
      <span>${todo.Description}</span>
    </div>
    <div class="right">
      <span class="fa-solid fa-trash fa-lg elippse-icon remove-btn">
      </span>
    </div>
  </li>      
        `;
};

// eslint-disable-next-line import/prefer-default-export
export { addTodoToUI };