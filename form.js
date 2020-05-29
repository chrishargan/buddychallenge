const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const formButton = document.getElementById('formButton');



name.addEventListener('change', stateHandle);
email.addEventListener('change', stateHandle);
subject.addEventListener('change', stateHandle);
message.addEventListener('change', stateHandle);


function stateHandle() {
    if (name.value === '' || email.value === '' || subject.value === '' || message.value === '') {
        formButton.disabled = true
        formButton.className = "btn btn-primary disabled"
    } else {
        formButton.disabled = false
        formButton.className = "btn btn-primary"
    }
}

