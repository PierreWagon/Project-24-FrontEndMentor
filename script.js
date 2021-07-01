const mail = document.getElementById('email');
const btn = document.querySelector('.send-mail');
const hiddenMenu = document.querySelector('.validation-menu');

function validateMail(mail) {
    var mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	if(mail.match(mailformat)) {
		return true;
	}
	else {
		return false;
	}
}

btn.addEventListener('click', e => {
	let sub = validateMail(mail.value);
	if (sub) {
		mail.classList.add('correct');
		mail.classList.remove('incorrect');
        hiddenMenu.classList.add('correct');
	} 
	else { 
		mail.classList.remove('correct');
		mail.classList.add('incorrect');
	}
})