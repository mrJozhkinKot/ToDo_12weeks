const weeks = document.querySelectorAll('.weeks .week');
const taskList = document.querySelectorAll('.list'); 


for (var i=0; i<weeks.length; i++) {
weeks[i].addEventListener('click', addTask);
weeks[i].addEventListener('click', removeTask);
weeks[i].addEventListener('click', clearTasks);
}

function addTask(e) {
const li = document.createElement ('li');
const taskInput = e.target.previousElementSibling;
li.appendChild(document.createTextNode (taskInput.value));
const link = document.createElement ('a');
link.innerHTML = '<i class="fas fa-times-circle"></i>';
li.appendChild(link);
if (taskInput.value !==''){
if (e.target.previousElementSibling.classList.contains('task')) {
e.target.parentElement.nextElementSibling.appendChild(li);
}
}
 taskInput.value = '';
 e.preventDefault();
}


function removeTask (e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  } 
}


function clearTasks (e) {
const taskList = e.target.previousElementSibling;
  while (taskList.firstChild) {
    taskList.removeChild (taskList.firstChild);
  }
}





