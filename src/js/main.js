const form = document.querySelector(".left__form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const emailInput = form.querySelector("#email");
	const passwordInput = form.querySelector("#password");

	const email = emailInput.value;
	const password = passwordInput.value;

	alert(`Form submitted, Email: ${email}, Password: ${password}`);

	form.reset();
});
