const ageForm = document.getElementById("ageForm");

if (ageForm) {
	ageForm.addEventListener("submit", (event) => {
		event.preventDefault();

		const ageInput = document.getElementById("age");
		const ageError = document.getElementById("ageError");
		const celebrantName = document.getElementById("celebrantName").value.trim();
		const senderName = document.getElementById("senderName").value.trim();
		const message = document.getElementById("message").value.trim();
		const color = document.getElementById("themeColor").value;
		const age = Number(ageInput.value);

		if (!celebrantName || !senderName || !message) {
			ageError.textContent = "Please complete the names and message.";
			return;
		}

		if (!Number.isInteger(age) || age < 1 || age > 120) {
			ageError.textContent = "Please enter a whole number from 1 to 120.";
			ageInput.focus();
			return;
		}

		localStorage.setItem("celebrantAge", String(age));
		localStorage.setItem("celebrantName", celebrantName);
		localStorage.setItem("senderName", senderName);
		const cardUrl = new URLSearchParams({ age, name: celebrantName, senderName, message, color });
		window.location.href = `final.html?${cardUrl}`;
	});
}
