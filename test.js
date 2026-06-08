const toDoList = [];
const inputToDo = document.querySelector(".todo-input");
const addToDo = document.getElementById("todo-add");
const toDoContainer = document.querySelector(".todo-list-container");


function renderToDo() {
    toDoContainer.innerHTML = "";
    toDoList.forEach((list) => {
        const newDiv = document.createElement("div");
        const newRadio = document.createElement("input");
        const readOnlyInput = document.createElement("input")
        const spanItems = document.querySelector(".span-total-items");
        let toDoCount = toDoList.length;

        newDiv.classList.add("todo-items");

        newRadio.type = "radio";
        newRadio.name = "listed-todo";
        newRadio.classList.add("todo-complete");

        readOnlyInput.type = "input";
        readOnlyInput.name = "readonly-striken";
        readOnlyInput.classList.add("todo-input");
        readOnlyInput.readOnly = true;

        toDoContainer.appendChild(newDiv);
        newDiv.appendChild(newRadio);
        newDiv.appendChild(readOnlyInput);

        readOnlyInput.value = `${list.toDo}`;
        spanItems.textContent = `${toDoCount}`;
});
};

addToDo.addEventListener("click", (event) => {
    let newToDo = {};

    newToDo.toDo = inputToDo.value;
    newToDo.isCompleted = false;
    toDoList.push(newToDo);
    addToDo.checked = false;
    inputToDo.value = "";
    renderToDo();
});


inputToDo.addEventListener("keydown", (event) => {
    let newToDo = {};

    if (event.key === "Enter") {
        newToDo.toDo = inputToDo.value;
        newToDo.isCompleted = false;
        toDoList.push(newToDo);
        addToDo.checked = false;
        inputToDo.value = "";
        renderToDo();
    }
});

const toDoComplete = document.querySelector(".todo-complete");
const readOnlyInput = document.querySelector(".todo-striken");

toDoComplete.addEventListener("click", (event) => {
    toDoList.forEach((completed) => {
        toDoList.completed.isCompleted = true;
        readOnlyInput.completed.value.style.textDecoration = "line-through";
    });
});