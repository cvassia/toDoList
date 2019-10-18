const addForm = document.querySelector("form");

const localStorageArray = JSON.parse(localStorage.getItem("toDoList"));

localStorageArray.map(toDoItem => {
  //create elements for local storage
  console.log(toDoItem);
  const toDo = document.createElement("span");
  const li = document.createElement("li");
  const deleteBtn = document.createElement("span");
  const value = addForm.querySelector('input[type="text"]').value;
  //add content

  toDo.textContent = value;

  deleteBtn.innerHTML =
    '<i id="done" class="far fa-check-circle fa-s"></i><i id="trash" class="fas fa-trash fa-s"></i>';

  //add classes

  li.classList.add("list");
  toDo.classList.add("toDo");
  deleteBtn.classList.add("delete");

  // append to dom

  toDo.innerHTML = toDoItem.toDo;
  li.appendChild(toDo);
  toDo.appendChild(deleteBtn);
  const ul = document.querySelector(".toDoInsert");
  ul.appendChild(li);

  // clear input field
  const form = document.querySelector("form");
  form.reset();

  let editor = (toDo.contentEditable = true);
});

addForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  //create elements
  const toDo = document.createElement("span");
  const li = document.createElement("li");
  const deleteBtn = document.createElement("span");

  //add content

  toDo.textContent = value;

  deleteBtn.innerHTML =
    '<i id="done" class="far fa-check-circle fa-s"></i><i id="trash" class="fas fa-trash fa-s"></i>';

  //add classes

  li.classList.add("list");
  toDo.classList.add("toDo");
  deleteBtn.classList.add("delete");

  // append to dom

  li.appendChild(toDo);
  toDo.appendChild(deleteBtn);
  const ul = document.querySelector(".toDoInsert");
  ul.appendChild(li);

  // clear input field
  const form = document.querySelector("form");
  form.reset();

  let editor = (toDo.contentEditable = true);

  const toDoObject = {
    toDo: toDo.innerText
  };

  localStorageArray.push(toDoObject);

  // console.dir(toDoArray);

  localStorage.setItem("toDoList", JSON.stringify(localStorageArray));
});

// delete toDo

const deleteToDo = document.querySelector("ul");
// console.log(deleteToDo);

deleteToDo.addEventListener("click", e => {
  if (e.target.className == "fas fa-trash fa-s") {
    if (confirm("Are you sure you want to delete your note?") == true) {
      const li = e.target.parentElement.parentElement.parentElement;
      deleteToDo.removeChild(li);
    }
  }
});

deleteToDo.addEventListener("click", e => {
  if (e.target.className == "far fa-check-circle fa-s") {
    const strike = e.target.parentElement.parentElement.parentElement;
    strike.classList.toggle("strike");
  }
});

deleteToDo.deleteItem();
