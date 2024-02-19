document.getElementById('formLogin').addEventListener('submit', (ev)=> {
    if (form.checkValidity() === false) {
        form.classList.add('was-validated')
        ev.preventDefault()
        ev.stopPropagation()
    } else {
        form.classList.remove('was-validated')
    }
})
