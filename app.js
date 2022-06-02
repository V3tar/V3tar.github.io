let form = document.querySelector('form');
let rating_btns = document.querySelectorAll('.btn');
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    //hide the form
    form.classList.add('hide');
    //show the dialog
    let modal = document.querySelector('dialog');
    modal.showModal();
});

 //add event listener to the rating btns
rating_btns.forEach((rating_btn) => {
    rating_btn.addEventListener('click',(e) => {
        e.preventDefault();
        let rating = e.target.textContent;
        let h3 = document.querySelector('h3');
        h3.textContent = `You have selected ${rating} out of 5`;
    });
});



