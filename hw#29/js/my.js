const closeBtn = document.querySelector('.btn-close');
const alertMenu = document.querySelector('.alert');


function ButtonClose() {

    alertMenu.classList.add('displ-none')

}

closeBtn.addEventListener('click', ButtonClose);
