console.log("hello world");



function handleSubmit(evt) {
	// evt.preventDefault();
	() => {
		alert("Your form has been submitted successfully.")
	}
}


let form = document.getElementById("contact");

form.addEventListener('submit', () => {
	alert("Your form has been submitted successfully.")});

let pic = document.querySelector("#kitpic")

pic.addEventListener('mouseover', () => {
	alert("Wow, you are really great!")
})