
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

const data = [
  { 'quoteAuthor': "Terry Pratchett", 'quoteText': 'In ancient times cats were worshipped as gods; they have not forgotten this.' },
  { 'quoteAuthor': "Garrison Keillor", 'quoteText': 'Cats are intended to teach us that not everything in nature has a purpose.' },
  { 'quoteAuthor': "Neil Gaiman", 'quoteText': 'Anyone who believes what a cat tells him deserves all he gets.' },
  { 'quoteAuthor': "Robert A. Heinlein", 'quoteText': 'Never try to outstubborn a cat.' },
  { 'quoteAuthor': "Eckhart Tolle", 'quoteText': 'I have lived with several Zen masters -- all of them cats.' },
  { 'quoteAuthor': "Unknown", 'quoteText': "In a cat's eye, all things belong to cats." },
  { 'quoteAuthor': "Albert Schweitzer", 'quoteText': 'There are two means of refuge from the miseries of life: music and cats.' },
  { 'quoteAuthor': "Charles M. Blow", 'quoteText': 'A lie is like a cat: you need to stop it before it gets out the door or it’s really hard to catch.' },
  { 'quoteAuthor': "Unknown", 'quoteText': 'No home is complete without the pitter patter of kitty feet.' },
  { 'quoteAuthor': "Ellen P. Berkeley", 'quoteText': 'As every cat owner knows, nobody owns a cat.' },
  { 'quoteAuthor': "Lloyd Alexander", 'quoteText': "The only thing a cat worries about is what's happening right now." },
]

// Get Quote from API
async function getQuote() {
  // solving CORS ===== NOT WORKING ==============
  // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  // const apiURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';


  try {
    // ==== CORS ISSUE =========
    // const response = await fetch(proxyUrl + apiURL);
    // const data = await response.json();
    // console.log('HERE IS DATA:', data)

    // ======= USE DUMMY DATA =========
    authorText.innerText = `-- ${data[0].quoteAuthor}`;
    quoteText.innerText = data[0].quoteText
  } catch (error) {
    console.log('whoops, no quote', error);
  }
}

//Tweet Quote
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank')
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuote();