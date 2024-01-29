let subtask1 = [];
let subtask2 = [];
let subtask3 = [];

alert("Enter the task you want to do, Every task have a + button, click on it and add subtask to each")
let a = document.getElementById('completed');
a.style.textDecoration = "line-through";


clear = document.getElementById('bu');
clear.addEventListener('click', function () {
    a.innerHTML = "";
});

function addtask(subtask, taskButton) {
    let subtasks = prompt('Enter your substask');
    if (subtasks !== null && subtasks !== 0) {
        subtask.push(subtasks);
        let div = taskButton.parentElement;
        let ddiv = document.createElement('div');
        let input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'subtasks';
        input.value = subtask[subtask.length - 1];
        input.id = "subtask" + (subtask.length - 1);
        input.title = "Mark as completed"; 
        let label = document.createElement('label');
        label.title = "Mark as completed"; 
        let brr = document.createElement('br');
        label.htmlFor = "subtask" + (subtask.length - 1);
        label.appendChild(document.createTextNode(subtask[subtask.length - 1]));
        let ip2 = document.createElement('input');
        ip2.type = 'time';
        ip2.title = "Schedule time to start";

        ddiv.appendChild(input);
        ddiv.appendChild(label);

        let nwediv = document.createElement('div');
        nwediv.classList.add("lll");

        nwediv.appendChild(ddiv);
        nwediv.appendChild(ip2);
        div.appendChild(nwediv);

        input.addEventListener('change', function () {
            if (input.checked) {
                a.appendChild(document.createTextNode(input.value));
                a.appendChild(brr);
                div.removeChild(nwediv);
            }
        });
    }
}

var taskButton1 = document.getElementById("btn0");
taskButton1.addEventListener('click', () => addtask(subtask1, taskButton1));


var taskButton2 = document.getElementById("btn1");
taskButton2.addEventListener('click', () => addtask(subtask2, taskButton2));


var taskButton3 = document.getElementById('btn2');
taskButton3.addEventListener('click', () => addtask(subtask3, taskButton3));







