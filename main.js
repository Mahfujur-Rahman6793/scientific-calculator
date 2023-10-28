const display = document.getElementById('screen');
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
