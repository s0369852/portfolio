const toDoForm = document.querySelector('.js_toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js_toDoList'),
    TODOS = 'toDos';
let toDos = [];

function deleteToDo(event){
    event.preventDefault();
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos
    saveToDos()
};

function saveToDos(){
    localStorage.setItem(TODOS, JSON.stringify(toDos))
};

function padintToDo(text){
    const li = document.createElement('li'),
        delBtn = document.createElement('button'),
        span = document.createElement('span'),
        newId = toDos.length + 1;
    
    delBtn.innerText = '❌';
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    
    saveToDos();
};

function handleSubmit(event){
    event.preventDefault();
    
    const currentValue = toDoInput.value;
    padintToDo(currentValue);
    toDoInput.value = '';
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            padintToDo(toDo.text)
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit)
};

init();