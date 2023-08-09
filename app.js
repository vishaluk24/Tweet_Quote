// Get the elements
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
const tweet = document.getElementById("tweetMe");

// Function to generate a random quote
let generateQuote = () => {
    fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            let index = Math.floor(Math.random() * data.length); // Fixed the random number generation
            quote.innerText = data[index].text;
            author.innerText = data[index].author ? data[index].author : "Unknown";
        })
        .catch(error => {
            console.error("Error fetching quotes:", error);
        });
};

// Function to open a tweet intent
let tweetMe = () => {
    let tweetPost = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(`${quote.innerText} - ${author.innerText}`);
    window.open(tweetPost);
};

// Initial quote generation
generateQuote();

// Event listeners
btn.addEventListener('click', generateQuote);
tweet.addEventListener('click', tweetMe);
