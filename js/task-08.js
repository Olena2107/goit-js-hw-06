const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(el) {
    el.preventDefault();
    const formElement = el.currentTarget.elements;
    const email = formElement.email.value;
    const password = formElement.password.value;
    if (email === "" || password === "") {
        return alert("Усі поля мають бути заповнені!");
    }
    const formData = {
        email,
        password,
    };
    console.log(formData);
    el.currentTarget.reset();
}
