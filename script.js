let addBtn = document.querySelector(".kinito")
addBtn.addEventListener('click', addNewTask);
var userName = 0;
function addNewTask() {
    var userName = prompt('Введите имя в поле ввода');
    alert('Привет!' , userName);
    console.log('Привет!' + userName);
}
// addBtn.addEventListener('click', addNewTask);