import "./reset.css"
import "./style.css"

function checkCountry() {
	let country = document.getElementById('country')
	let checkValidity = (event)=>{
		if (event.target.value.length == 0){
			country.setCustomValidity("Country must be defined");
		}
		else if( event.target.value != "US"){
			country.setCustomValidity("For this exercise only the US is supported.");
		}
		else {
			country.setCustomValidity("");
		}
	}
	country.addEventListener('load', checkValidity)
	country.addEventListener('change', checkValidity)

}

function checkZip(){
	let zip = document.getElementById('zipcode')
	let checkValidity = (event)=>{
		let value = event.target.value
		let pattern = "(^[0-9]{5}$)|(^[0-9]{5}-[0-9]{4}$)"
		console.log(value)
		console.log(value.match(pattern))
		if (!value.match(pattern)){
			zip.setCustomValidity("Needs to match a zip code")
		}
	}

	zip.addEventListener("load",(event)=>{
		checkValidity(event)
	})
	zip.addEventListener("change",(event)=>{
		checkValidity(event)
	})




}

function checkEmail(){
	let email = document.getElementById('email')
	let checkValidity = (event)=>{
		if (event.target.typeMismatch){
			email.setCustomValidity("Needs to be an email.")
		}
		else {
			email.setCustomValidity("")

		}
	}
	email.addEventListener('load',checkValidity)
	email.addEventListener('change',checkValidity)


}

function checkPassword(){
	let password_element = document.getElementById('password')
	let password_confirm_element = document.getElementById('password-confirm')
	let checkValidity = (event)=>{
		let value = event.target.value
		if (value.length < 8){
			event.target.setCustomValidity("Needs to be at least 8 characters.")
		} else if (!value.match("[0-9a-z]")) {
			event.target.setCustomValidity("Must have numeric character as well.")
		}
		else {
			event.target.setCustomValidity("")

		}
	}
	let checkConfirm = (event)=>{
		checkValidity(event)
		let other = password_element.value
		let value = event.target.value
		if (value != other ){
			event.target.setCustomValidity("Must match initial password.")
		} else{
			event.target.setCustomValidity("")

		}
	}
	password_element.addEventListener('load',checkValidity)
	password_element.addEventListener('change',checkValidity)
	password_confirm_element.addEventListener('load',checkConfirm)
	password_confirm_element.addEventListener('change',checkConfirm)

}

function registerSubmit(){
	let form = document.getElementById('check-form');
	form.addEventListener('submit', (event)=>{
		console.log(event.target)
		event.preventDefault()
	})


	
}

checkCountry()
checkZip()
checkEmail()
checkPassword()
registerSubmit()





