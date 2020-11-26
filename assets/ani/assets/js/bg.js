const body = document.querySelector('body'),
    imgNumber = 9;

function paintImage(imgNum){
    const image = new Image();
    image.src = `assets/img/${'0' + (imgNum + 1) +'@2'}.jpg`
    image.classList.add("bgimg");
    body.prepend(image);
};

function Random(){
    const number = Math.floor(Math.random() * imgNumber);
    return number;
};

function init(){
    const randomNumber = Random();
    paintImage(randomNumber)
}

init();