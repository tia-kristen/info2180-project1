/* Add your JavaScript to this file */
window.addEventListener('DOMContentLoaded', () => {
    const message = document.querySelector('.message');
    const submitBtn = document.querySelector('.newsletter .btn');
    const input = document.querySelector('.form-group input');

    submitBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        let msg = input.value;
        message.innerHTML = input.validity.valid ? `Thank you! Your email address ${msg} has been added to our mailing list!` : 'Please enter a valid email address.';
    })
});