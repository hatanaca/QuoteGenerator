const quoteDisplay = document.getElementById("quote");
const newQuoteButton = document.getElementById("newQuoteBtn");


async function fetchRandomQuote() {
	try {
		const response = await fetch("https://api.quotable.io/random");
		const data = await response.json();
		quoteDisplay.textContent = `"${data.content}" - ${data.author}`;
		} catch (error) {
			quoteDisplay.textContent = "Oops! Something went wrong. Please try again later";
		}

}

newQuoteButton.addEventListener("click", fetchRandomQuote);

fetchRandomQuote();
