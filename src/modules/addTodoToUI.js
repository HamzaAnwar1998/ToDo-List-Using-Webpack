const addTodoToUI = (todo) => {
  document.querySelector('.todo-container').innerHTML += `
    <li class="todo" id="${todo.ID}">
    <div class="left">
      <input type="checkbox" ${todo.Completed ? 'checked' : 'unchecked'}/>
      <label class="label" contenteditable="true">${todo.Description}</label>
    </div>
    <div class="right">
      <span class="fa-solid fa-trash fa-lg elippse-icon remove-btn">
      </span>
    </div>
  </li>      
        `;
};

export default addTodoToUI;