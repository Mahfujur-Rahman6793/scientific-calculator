const display = document.getElementById('screen');
// console.log(display);
const btn = document.querySelectorAll('.btn');
for (item of btn) {
    item.addEventListener('click', (e) => {
        const btnText = e.target.innerText;

        display.value += btnText;
        
        
    })
}

