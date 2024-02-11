const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const passEval = document.querySelector('.passEval');
const form = document.querySelector('form');


pass.addEventListener ('keyup', () =>{
    if (pass.value !== pass2.value) {
        passEval.style.display = 'block';
        pass.classList.add('passNotMatch');
        pass2.classList.add('passNotMatch');
    } else {
        passEval.style.display = 'none';
        pass.classList.remove('passNotMatch');
        pass2.classList.remove('passNotMatch');
    }

})

pass2.addEventListener ('keyup', () =>{
    if (pass.value !== pass2.value) {
        passEval.style.display = 'block';
        pass.classList.add('passNotMatch');
        pass2.classList.add('passNotMatch');
    } else {
        passEval.style.display = 'none';
        pass.classList.remove('passNotMatch');
        pass2.classList.remove('passNotMatch');
    }

})

// This prevents the form from executing the submit if passwords do not match

form.addEventListener('submit', (event) => {
    if (pass.value !== pass2.value) {
        event.preventDefault();
    }
})