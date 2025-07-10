const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "You learn more from failure than from success. Don’t let it stop you.",
    author: "Unknown"
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein"
  }
];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet-quote");
const quoteBox = document.getElementById("quote-box");

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
  const { text, author } = getRandomQuote();

  quoteBox.classList.add("fade-out");

  setTimeout(() => {
    quoteText.innerText = text;
    quoteAuthor.innerText = `— ${author}`;
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${text}" — ${author}`)}`;

    quoteBox.classList.remove("fade-out");
  }, 500);
}

newQuoteBtn.addEventListener("click", displayQuote);
