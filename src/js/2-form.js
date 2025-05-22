const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
let formData = JSON.parse(
    localStorage.getItem(localStorageKey)) ?? {
        email: '',
        message: '',
    }

form.email.value = formData.email
form.message.value = formData.message

form.addEventListener('input', event => {
    formData.email =
        event.target.name === 'email' ? event.target.value : formData.email;
    formData.message =
        event.target.name === 'message' ? event.target.value : formData.message;

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();
    if (formData.email.trim() === '' || formData.message.trim() === '') {
        alert('Fill please all fields');
        return;
    }
    localStorage.removeItem(localStorageKey);
    form.reset();
});
