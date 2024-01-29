let subtask1 = [];
let subtask2 = [];
let subtask3 = [];


let a = document.getElementById('completed');
a.style.textDecoration = "line-through";


clear = document.getElementById('bu');
clear.addEventListener('click', function () {
    a.innerHTML = "";
});


var taskButton1 = document.getElementById("btn0");
taskButton1.addEventListener('click', function () {
    let subtasks = prompt('Enter your substask')
    if(subtasks != null && subtasks != 0){
    subtask1.push(subtasks);
    let div = taskButton1.parentElement;
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'subtasks';
    input.value = subtask1[subtask1.length - 1];
    input.id = "subtask" + (subtask1.length - 1);
    let label = document.createElement('label');
    let brr = document.createElement('br');
    label.htmlFor = "subtask" + (subtask1.length - 1);
    label.appendChild(document.createTextNode(subtask1[subtask1.length - 1]));
    let ip2 = document.createElement('input');
    ip2.style.marginLeft = "20px"
    ip2.type = 'time';
    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(ip2);
    div.appendChild(brr);

    input.addEventListener('change', function () {
        if (input.checked) {
            a.appendChild(document.createTextNode(input.value));
            a.appendChild(brr);
            div.removeChild(input);
            div.removeChild(label);
            div.removeChild(ip2);
            div.removeChild(brr);
        }
    });
}

});


var taskButton2 = document.getElementById("btn1");
taskButton2.addEventListener('click', function () {
    let subtasks = prompt('Enter your substask')
    if(subtasks != null && subtasks != 0){
    subtask2.push(subtasks);
    let div = taskButton2.parentElement;
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'subtasks';
    input.value = subtask2[subtask2.length - 1];
    input.id = "subtask" + (subtask2.length - 1);
    let label = document.createElement('label');
    let brr = document.createElement('br');
    label.htmlFor = "subtask" + (subtask2.length - 1);
    label.appendChild(document.createTextNode(subtask2[subtask2.length - 1]));
    let ip2 = document.createElement('input');
    ip2.style.marginLeft = "20px"
    ip2.type = 'time';
    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(ip2);
    div.appendChild(brr);

    input.addEventListener('change', function () {
        if (input.checked) {
            a.appendChild(document.createTextNode(input.value));
            a.appendChild(brr);
            div.removeChild(input);
            div.removeChild(label);
            div.removeChild(ip2);
            div.removeChild(brr);
        }
    });
}

});

var taskButton3 = document.getElementById('btn2');
taskButton3.addEventListener('click', function () {
    let subtasks = prompt('Enter your subtask');
    if(subtasks != null && subtasks != 0){
    subtask3.push(subtasks);
    let div = taskButton3.parentElement;
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'subtasks';
    input.value = subtask3[subtask3.length - 1];
    input.id = 'subtask' + (subtask3.length - 1);
    let label = document.createElement('label');
    let brr = document.createElement('br');
    label.htmlFor = 'subtask' + (subtask3.length - 1);
    label.appendChild(document.createTextNode(subtask3[subtask3.length - 1]));
    let ip2 = document.createElement('input');
    ip2.style.marginLeft = "20px"
    ip2.type = 'time';
    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(ip2);
    div.appendChild(brr);

    input.addEventListener('change', function () {
        if (input.checked) {
            a.appendChild(document.createTextNode(input.value));
            a.appendChild(brr);
            div.removeChild(input);
            div.removeChild(label);
            div.removeChild(ip2);
            div.removeChild(brr);
        }
    });
}
});






