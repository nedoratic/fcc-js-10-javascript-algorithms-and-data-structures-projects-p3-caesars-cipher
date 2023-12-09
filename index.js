// Define a function to decipher Caesars Cipher
function rot13(string) {
	// Initialize an empty string to store the deciphered result
	let decipheredString = "";
	// Iterate through each character in the input string
	for (let i = 0; i < string.length; i++) {
		// Get the ASCII code of the current character
		let characterCode = string.charCodeAt(i);
		// Initialize a variable to track whether the current letter is uppercase
		let isUpperCase = false;
		// Check if the character is a letter (A-Z or a-z)
		if ((characterCode >= 65 && characterCode <= 90) || (characterCode >= 97 && characterCode <= 122)) {
			// Determine if the letter is uppercase
			isUpperCase = characterCode >= 65 && characterCode <= 90;
			// Perform the ROT13 shift. Add 13 and wrap around if needed.
			characterCode = ((characterCode - (isUpperCase ? 65 : 97) + 13) % 26) + (isUpperCase ? 65 : 97);
		}
		// Append the deciphered character to the result
		decipheredString += String.fromCharCode(characterCode);
	}
	// Return the final deciphered string
	return decipheredString;
}

// Define a function to render the result in the HTML
function renderResult(result) {
	// Get the result paragraph element
	const resultParagraph = document.querySelector(".app__result");
	// Update the text content of the result paragraph with the deciphered text
	resultParagraph.textContent = result;
}

// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function () {
	// Get the button element
	const decipherButton = document.querySelector(".app__button");
	// Add a click event listener to the button
	decipherButton.addEventListener("click", function () {
		// Get the input value
		const inputValue = document.getElementById("app__input").value;
		// Perform ROT13 decryption
		const decipheredText = rot13(inputValue);
		// Render the result in the HTML
		renderResult(decipheredText);
	});
});

// console.log(rot13("SERR PBQR PNZC"));
// FREE CODE CAMP

// console.log(rot13("SERR CVMMN!"));
// FREE PIZZA!

// console.log(rot13("SERR YBIR?"));
// FREE LOVE?

// console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
// THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
