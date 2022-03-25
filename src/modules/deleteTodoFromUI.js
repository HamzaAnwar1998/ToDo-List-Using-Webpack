const deleteTodoFromUI = (el) => {
  if (el.classList.contains('remove-btn')) {
    el.parentElement.parentElement.remove();
  }
};

export default deleteTodoFromUI;