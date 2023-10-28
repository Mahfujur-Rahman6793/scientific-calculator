const display = document.getElementById('screen');
display.addEventListener('keydown', (e) => {
    e.preventDefault();
})
// console.log(display);
const btn = document.querySelectorAll('.btn');
for (item of btn) {
    item.addEventListener('click', (e) => {
        let btnText = e.target.innerText;
        if (btnText == '×') {
            btnText= '*';
        }
        if (btnText == '÷') {
            btnText = '/';
        }
        if (btnText == '×') {
            btnText = '*';
        }

        display.value += btnText;   
    })
}

const backspc = () => {
    display.value = display.value.substr(0, display.value.length - 1);
}
const fact = () => {
    let f = 1;
    let i;
    const num = display.value;
    for (i = 1; i <= num; i++){
        f = i * f;
    }
    i -= 1;
    display.value = f;
}

const sin = () => {
    display.value = Math.sin(display.value);
}
const cos = () => {
    display.value = Math.cos(display.value);
}
const tan = () => {
    display.value = Math.tan(display.value);
}
const log = () => {
    display.value = Math.log(display.value);
}
const sqrt = () => {
    display.value = Math.sqrt(display.value,2);
}
const pow = () => {
    display.value = Math.pow(display.value,2);
}
const pi = () => {
    display.value = 3.1416;
}
const e = () => {
    display.value = 2.71828182846;
}


