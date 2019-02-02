const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const container = document.getElementById('task-container');
const addTaskFormElement = document.getElementById('add-task-form');

const renderTasks = () => {
  container.innerHTML = addTaskFormElement.outerHTML;
  tasks.forEach((task, i) => {
    let taskContainer = document.createElement('div');
    taskContainer.className = `task-card`;
    taskContainer.innerHTML = `
      <h4>${task.title}</h4>
      <p>Name: ${task.tempFirst} ${task.tempLast}</p>
      <p>Sprint: ${task.tempSprint}</p>
      <p>Issue: ${task.tempIsue}</p>
      <p>ID#: ${i+1}</p>
      <p>State: ${task.tempState}</p>
      <p>Date created: ${new Date()}</p>
      <p>Description: ${task.description}</p>
      <button class="button-danger" onclick="removeTask(${i})">Delete</button>
    `;
    container.appendChild(taskContainer);
  });
};

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const addTask = () => {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let tempFirst = document.getElementById('firstName').value;
  let tempLast = document.getElementById('lastName').value;
  let tempSprint = document.getElementById('sprint').value;
  let tempIsue = document.getElementById('result').value;
  let tempState = document.getElementById('stateResult').value;

  if (!title || !description || !tempFirst || !tempLast || !tempSprint || !tempIsue || !tempState) {
    window.alert('Complete all fields!');
    return;
  }

  const task = { title, description, tempFirst, tempLast, tempSprint, tempIsue, tempState };

  tasks.push(task);
  saveTasks();
  renderTasks();
};

const removeTask = (index) => {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
};

renderTasks();
