document.getElementById('addBtn').addEventListener('click', () => {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';

  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(removeBtn);

  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
});