const component = () => {
  const element = document.createElement('div');

  const todos = [
    { ID: 0, description: 'Learn React', completed: true },
    { ID: 1, description: "Complete Today's task", completed: false },
    { ID: 2, description: 'Learn Firebase', completed: true },
  ];

  todos.forEach((todo) => {
    element.innerHTML += `
        <p>${todo.description}</p>      
    `;
  });

  return element;
};

document.body.appendChild(component());