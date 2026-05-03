let cont = 0;
const numberElement = document.getElementById('number');
const statusElement = document.getElementById('status');
const appElement = document.getElementById('app');

function updateStatus() {
    numberElement.textContent = cont;
    if (cont > 10) {
        numberElement.style.color = 'red';
        statusElement.textContent = '数字太大了！';
    }
    else if (cont < 0) {
        numberElement.style.color = 'blue';
        statusElement.textContent = '数字太小了！';
    }  
    else {
        numberElement.style.color = 'aqua';
        statusElement.textContent = '当前状态正常';
    }
}
function addnumber(step) {
    if (step === 0) {
        cont = 0;
    }
    else {
        cont += step;
    }
    updateStatus();
}
document.getElementById('increment').addEventListener('click', () => addnumber(1));
document.getElementById('decrement').addEventListener('click', () => addnumber(-1));
document.getElementById('reset').addEventListener('click', () => addnumber(0));