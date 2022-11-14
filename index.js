const buttons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box');
const searchBox = document.querySelector('#search');

searchBox.addEventListener('keyup', (event) => {
    let searchText = event.target.value.toLowerCase().trim();
    boxes.forEach((box) => {
        const data = box.dataset.item;
        if (data.includes(searchText)) {
            box.style.display = 'block';
        }
        else {
            box.style.display = 'none';
        }
    })
    buttons.forEach((btn) => {
        btn.classList.remove('btn-clicked')
    });
    buttons[0].classList.add('btn-clicked')
});

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        setActiveBtn(event);
        const btnFilter = event.target.dataset.filter;

        boxes.forEach((box => {
            if (btnFilter == 'all') {
                box.style.display = 'block'
            } else {
                const boxFilter = box.dataset.item;
                if (btnFilter == boxFilter) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            }
        }));

    });
});

function setActiveBtn(e) {
    buttons.forEach((btn) => {
        btn.classList.remove('btn-clicked')
    });
    e.target.classList.add('btn-clicked')
}