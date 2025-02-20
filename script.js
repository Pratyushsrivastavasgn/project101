const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

async function fetchQuote() {
    try {
        const response = await fetch("https://quotes-api-self.vercel.app/quote");
        const data = await response.json();
        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = `- ${data.author}`;
    } catch (error) {
          "Oops! CoulquoteText.textContentd not fetch a quote.";
        quoteAuthor.textContent = "";
        console.error("Error fetching quote:", error);
    }
}

newQuoteBtn.addEventListener("click", fetchQuote);
