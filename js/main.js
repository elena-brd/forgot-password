const resetBtn = document.querySelector('.btn-reset');

function displayText(e) {
    e.preventDefault();
    const formInput = document.getElementById('form-input');
    formInput.textContent = 'A password reset link has been sent to you.'
    formInput.style.textAlign = 'center';
    formInput.style.color = '#14213d';

}

resetBtn.addEventListener('click', displayText)