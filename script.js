const frontFace = document.querySelector(".card-front-face");
const backFace = document.querySelector(".card-back-face");

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

const inputCardNumber = document.querySelectorAll(".input-card-number");
const inputExpirationDate = document.querySelectorAll(".input-expiration-date");
const inputCardOwner = document.querySelector("#card-owner");
const inputCardCrypto = document.querySelector("#card-crypto");

const cardNumber = document.querySelectorAll(".card-number");
const expirationDate = document.querySelectorAll(".date");
const cardOwner = document.querySelector(".owner");
const cardCrypto = document.querySelector(".cryptogram");

const regexNumber = /^\d+$/;

for (let i = 0; i < inputCardNumber.length; i++) {
	inputCardNumber[i].addEventListener("keyup", (e) => {
		if (regexNumber.test(e.target.value)) {
			cardNumber[i].innerHTML = e.target.value;

			if (cardNumber[i].textContent.length === 4) {
				inputCardNumber[i].nextElementSibling.focus();
			}
		}
	});
}

for (let i = 0; i < inputExpirationDate.length; i++) {
	inputExpirationDate[i].addEventListener("keyup", (e) => {
		console.log("coucou");
		if (regexNumber.test(e.target.value)) {
			expirationDate[i].innerHTML = e.target.value;

			if (expirationDate[i].textContent.length === 2) {
				inputExpirationDate[i].nextElementSibling.focus();
			}
		}
	});
}

const inputContent = (element, e) => {
	element.innerHTML = e.target.value;
};

inputCardOwner.addEventListener("keyup", (e) => {
	inputContent(cardOwner, e);
});

inputCardCrypto.addEventListener("keyup", (e) => {
	if (regexNumber.test(e.target.value)) {
		inputContent(cardCrypto, e);
		backFaceForeground();
	}
});
