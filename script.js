const frontFace = document.querySelector(".card-front-face");
const backFace = document.querySelector(".card-back-face");

const inputCardNumber = document.querySelectorAll(".input-card-number");
const inputExpirationDate = document.querySelectorAll(".input-expiration-date");
const inputCardOwner = document.querySelector(".card-owner");
const inputCardCrypto = document.querySelector(".card-crypto");

const cardNumber = document.querySelectorAll(".card-number");
const expirationDate = document.querySelectorAll(".date");
const cardOwner = document.querySelector(".owner");
const cardCrypto = document.querySelector(".cryptogram");

const regexNumber = /^\d+$/;

//********** Foregrounded card faces when clicked **********

frontFace.addEventListener("click", () => {
	frontFace.classList.remove("z-0");
	backFace.classList.remove("z-10");
	frontFace.classList.add("z-10");
});

const backFaceForeground = () => {
	backFace.classList.remove("z-0");
	frontFace.classList.remove("z-10");
	backFace.classList.add("z-10");
};

backFace.addEventListener("click", backFaceForeground);

//********** update dom element with form values function **********

const handleInputAndUpdateElement = (
	e,
	i,
	nodeList,
	element,
	elementLength,
) => {
	if (regexNumber.test(e.target.value)) {
		//********** update dom element **********

		element[i].innerHTML = e.target.value;

		//********** focus on next input when input maxlength is reached **********

		if (element[i].textContent.length === elementLength) {
			nodeList[i].nextElementSibling.focus();
		}
	}
};

//********** card number listener **********

for (let i = 0; i < inputCardNumber.length; i++) {
	inputCardNumber[i].addEventListener("keyup", (e) => {
		handleInputAndUpdateElement(e, i, inputCardNumber, cardNumber, 4);
	});
}

//********** expiration date listerner **********

for (let i = 0; i < inputExpirationDate.length; i++) {
	inputExpirationDate[i].addEventListener("keyup", (e) => {
		handleInputAndUpdateElement(
			e,
			i,
			inputExpirationDate,
			expirationDate,
			2,
		);
	});
}

//********** owner and card crypto update func **********

const elementContentUpdate = (element, e) => {
	element.innerHTML = e.target.value;
};

inputCardOwner.addEventListener("keyup", (e) => {
	elementContentUpdate(cardOwner, e);
});

inputCardCrypto.addEventListener("keyup", (e) => {
	if (regexNumber.test(e.target.value)) {
		elementContentUpdate(cardCrypto, e);
		backFaceForeground();
	}
});
