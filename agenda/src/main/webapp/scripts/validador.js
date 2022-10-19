/**
 *  Validação de formulário
 *  @author Thomas Deus
 */
/** não está chamendo a função */
function validar() {
	let nome = document.getElementsByName('nome')[0].value
	let fone = document.getElementsByName('fone')[0].value
	let email = document.getElementsByName('email')[0].value

	if (nome === "") {
		alert('Preencha o campo Nome.')
		document.getElementsByName('nome')[0].focus()
		return false
	}

	else if (fone === "") {
		alert("Preencha o campo Telefone")
		document.getElementsByName('fone')[0].focus()
	}


	else {
		document.forms["frmContato"].submit()
	}
}

function validarFone() {
	var inputText = document.getElementById('frmFone')
	var foneFormat = /^\([0-9]{2}\)(?:9[0-9]{1}|[1-5]{1})[0-9]{3}-[0-9]{4}/
	if (inputText.value.match(foneFormat) && inputText.value.length <= 14 || inputText.value === "") {
		document.getElementsByName('email')[0].focus()
	}
	else {
		alert('Por favor, entre com formato de telefone válido. \n ex.:(41)12345-1234')
		return false
	}
}

function validarEmail() {
	var inputEmail = document.getElementById('frmEmail')
	var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if (inputEmail.value.match(emailFormat) || inputEmail.value === "") {
		return true
	}
	else {
		alert('Por favor, entre com formato de email válido. \n ex.:ex@email.com ou\n ex@email.com.br')
		return false
	}
}











