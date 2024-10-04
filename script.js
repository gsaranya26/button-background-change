function red() {
    document.querySelector('#btn1').style.backgroundColor ="red";
    document.querySelector('body').style.backgroundColor ="red";
}
function blue() {
    document.querySelector('#btn2').style.backgroundColor ="blue";
    document.querySelector('body').style.backgroundColor ="blue";
}
function green() {
    document.querySelector('#btn3').style.backgroundColor ="green";
    document.querySelector('body').style.backgroundColor ="green";
}

function reset() {
    document.body.style.backgroundColor = '';
    document.querySelector('#btn1').style.backgroundColor ='';
    document.querySelector('#btn2').style.backgroundColor ='';
    document.querySelector('#btn3').style.backgroundColor ='';
}
    