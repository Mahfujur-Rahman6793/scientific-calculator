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

