const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const listEl = document.querySelector("#tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = input.value;
  if (!task) {
    alert("lease fill ot the task");
    return;
  }
  console.log(task);
  const taskEl = document.createElement("div");
  taskEl.classList.add("task");

  const taskContentEl = document.createElement("div");
  taskContentEl.classList.add("task__content");

  taskEl.appendChild(taskContentEl);

  const taskInputEl = document.createElement("input");
  taskInputEl.type = "text";
  taskInputEl.classList.add("text");
  taskInputEl.value = task;
  taskInputEl.setAttribute("readonly", "readonly");

  taskContentEl.appendChild(taskInputEl);

  const taskActionsEl = document.createElement("div");
  taskActionsEl.classList.add("task__actions");

  const taskEditEl = document.createElement("button");
  taskEditEl.classList.add("edit");
  taskEditEl.innerText = "Edit";

  const taskDeleteEl = document.createElement("button");
  taskDeleteEl.classList.add("delete");
  taskDeleteEl.innerText = "Delete";
  taskActionsEl.appendChild(taskEditEl);
  taskActionsEl.appendChild(taskDeleteEl);

  taskEl.appendChild(taskActionsEl);

  listEl.appendChild(taskEl);

  input.value = "";

  taskEditEl.addEventListener("click", () => {
    if (taskEditEl.innerText.toLowerCase() == "edit") {
      taskInputEl.removeAttribute("readonly");
      taskInputEl.focus();
      taskEditEl.innerText = "Save";
    } else {
      taskInputEl.setAttribute("readonly");
    }
  });

  taskDeleteEl.addEventListener("click", () => {
    listEl.removeChild(taskEl);
  });
});
