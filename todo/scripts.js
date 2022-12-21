todos = JSON.parse(localStorage.getItem("todos")) || [];
const newTodoForm = document.querySelector("#new-todo-form");
const contentInput = newTodoForm["new_content"];
const categoryInput = newTodoForm["new_category"];
const todoListEl = document.querySelector("#todo-list");

// ad item to local storage
function addItem(content, category, done, dateCreate) {
  todos.push({
    content,
    category,
    done,
    dateCreate,
  });
  localStorage.setItem("todos", JSON.stringify(todos));
  //return { content, category, done, dateCreate };
}

// display
function displayTodoList() {
  todoListEl.innerHTML = "";

  todos.sort(function (a, b) {
    const keyA = new Date(a.dateCreate);
    const keyB = new Date(b.dateCreate);
    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    return 0;
  });
  todos.forEach((todo) => {
    displayItem(todo);
  });

  // set focus to input field - NOT WORKING
  contentInput.focus();
}

function displayItem(todo) {
  const todoItem = document.createElement("article");

  const todoCheckEl = document.createElement("input");
  const todoContentEl = document.createElement("div");
  const todoBtnEdit = document.createElement("button");
  const todoBtnDelete = document.createElement("button");

  todoCheckEl.type = "checkbox";
  todoCheckEl.checked = todo.done;

  todoItem.classList.add(`todo-item`, `${todo.category}`);
  todoContentEl.classList.add("todo-item__content");
  todoBtnEdit.classList.add("btn", "btn--edit");
  todoBtnDelete.classList.add("btn", "btn--delete");
  if (todo.done) {
    todoItem.classList.add("done");
  }

  todoContentEl.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
  todoBtnEdit.innerHTML = "Edit";
  todoBtnDelete.innerHTML = "Delete";

  todoItem.append(todoCheckEl, todoContentEl, todoBtnEdit, todoBtnDelete);
  todoListEl.appendChild(todoItem);

  // checkbox - mark as done
  todoCheckEl.addEventListener("change", (e) => {
    todo.done = e.target.checked;
    localStorage.setItem("todos", JSON.stringify(todos));

    if (todo.done) {
      todoItem.classList.add("done");
    } else {
      todoItem.classList.remove("done");
    }

    displayTodoList();
  });

  // btn - edit
  todoBtnEdit.addEventListener("click", (e) => {
    const input = todoContentEl.querySelector("input");

    if (todoBtnEdit.innerText.toLowerCase() == "edit") {
      todoBtnEdit.innerText = "Save";
      todoItem.classList.remove("done");
      input.removeAttribute("readonly");
      const end = input.value.length;

      input.setSelectionRange(end, end);
      input.focus();
    } else {
      todoBtnEdit.innerText = "Edit";
      input.setAttribute("readonly", "readonly");
      // add new value
      todo.todoContentEl = input.value;

      localStorage.setItem("todos", JSON.stringify(todos));
      displayTodoList();
    }
  });

  // btn - delete
  todoBtnDelete.addEventListener("click", (e) => {
    todos = todos.filter((t) => t != todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    displayTodoList();
  });
}
displayTodoList();

newTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = addItem(
    contentInput.value,
    categoryInput.value,
    false,
    new Date().getTime()
  );

  e.target.reset();
  displayTodoList();
});
