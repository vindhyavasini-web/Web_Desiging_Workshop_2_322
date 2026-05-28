const form = document.querySelector("#taskForm");
const input = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const template = document.querySelector("#taskTemplate");
const taskCount = document.querySelector("#taskCount");
const clearCompleted = document.querySelector("#clearCompleted");
const filterButtons = document.querySelectorAll(".filter");

let tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];
let currentFilter = "all";

function saveTasks() {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

function getVisibleTasks() {
  if (currentFilter === "active") {
    return tasks.filter((task) => !task.completed);
  }

  if (currentFilter === "completed") {
    return tasks.filter((task) => task.completed);
  }

  return tasks;
}

function updateCount() {
  const activeCount = tasks.filter((task) => !task.completed).length;
  taskCount.textContent = `${activeCount} ${activeCount === 1 ? "task" : "tasks"} left`;
}

function renderTasks() {
  taskList.innerHTML = "";

  getVisibleTasks().forEach((task) => {
    const clone = template.content.cloneNode(true);
    const item = clone.querySelector(".task-item");
    const checkbox = clone.querySelector("input");
    const title = clone.querySelector(".task-title");
    const deleteButton = clone.querySelector(".delete-btn");

    item.dataset.id = task.id;
    item.classList.toggle("completed", task.completed);
    checkbox.checked = task.completed;
    title.textContent = task.title;

    checkbox.addEventListener("change", () => {
      tasks = tasks.map((savedTask) => {
        if (savedTask.id === task.id) {
          return { ...savedTask, completed: checkbox.checked };
        }

        return savedTask;
      });

      saveTasks();
      renderTasks();
    });

    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter((savedTask) => savedTask.id !== task.id);
      saveTasks();
      renderTasks();
    });

    taskList.appendChild(clone);
  });

  updateCount();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = input.value.trim();

  if (!title) {
    input.focus();
    return;
  }

  tasks.unshift({
    id: crypto.randomUUID(),
    title,
    completed: false,
  });

  input.value = "";
  saveTasks();
  renderTasks();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      filterButton.classList.toggle("active", filterButton === button);
    });

    renderTasks();
  });
});

clearCompleted.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
});

renderTasks();
