const trailer = document.querySelectorAll('.item');
const mainButtons = document.querySelectorAll('.botao');

mainButtons[0].addEventListener('click', () => {
    
});

mainButtons[1].addEventListener('click', () => {
    
});

for (let i = 0; i < trailer.length; i++) {
    
    trailer[i].addEventListener("click", () => {
        console.log(trailer[i])
        window.open(`https://youtu.be/${trailer[i].id}`)
    })    
}

