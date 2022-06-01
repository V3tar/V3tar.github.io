let btns = document.querySelectorAll('.btn');
let btn_container = document.querySelector('.btn-container');
btn_container.addEventListener('click',(e) => {
    e.preventDefault();
    btns.forEach((btn) => {
        btn.classList.remove('orange-active');
        e.target.classList.add('orange-active');
    });
});
let form = document.querySelector('form');
form.addEventListener('submit',(e) => {
    e.preventDefault();
    //choose the modal section
    let modal = document.querySelector('.modal');
    modal.showModal();
    //hide the form
    form.classList.add('hide');
    btns.forEach((btn) => {
        let btn_text = btn.textContent; 
    });
     //select the h4 in the dialog
    let h3 = document.querySelector('h3');
    h3.textContent = `You selected ${btn_text} out of 5`
});