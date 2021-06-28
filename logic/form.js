const form = document.querySelector('form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const queryField = document.getElementById('query');
form.addEventListener('submit', (e) => {
    const reName = /[^\W\d_][a-z]{2,} *[A-Z]*/i;
    const reEmail = /[a-z][\w\.+-]{0,63}@[a-z0-9][a-z0-9\.-]{1,}\.[a-z]{2,3}/i;
    const reQuery = /[^\s]+/i;
    if (!reName.test(nameField.value)) {
        nameField.style.color = 'red';
        nameField.focus()
        e.preventDefault();
        return false
    } else if (!reEmail.test(emailField.value)) {
        emailField.style.color = 'red';
        emailField.focus();
        e.preventDefault();
        return false
    } else if (queryField.value === "" || !reQuery.test(queryField.value)) {
        queryField.style.color = 'red';
        queryField.focus();
        e.preventDefault();
        return false
    } else {
        submitted = true;
        alert("We've recieved your query.");
        return true
    }
})
nameField.addEventListener('keydown', () => {
    nameField.style.color = 'initial';
})
emailField.addEventListener('keydown', () => {
    emailField.style.color = 'initial';
})
queryField.addEventListener('keydown', () => {
    queryField.style.color = 'initial';
})