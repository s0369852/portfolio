// greetings
const form = document.querySelector('.js_form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js_greetings');

const userList = 'currentUser',
    currentShow = 'showing';

function saveName(text){
    localStorage.setItem(userList, text)
};

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
};

function askForName(){
    form.classList.add(currentShow);
    form.addEventListener('submit', handleSubmit)
};

function paintGreeting(text){
    form.classList.remove(currentShow);
    greeting.classList.add(currentShow);
    greeting.innerText = `Hello! ${text}`;
};

function loadName(){
    const currentUser = localStorage.getItem(userList);

    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
};

function init(){
    loadName();
};

init();