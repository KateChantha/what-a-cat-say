
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

// Get Quote from API
async function getQuote() {
  // solving CORS 
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

  const data = [
    { 'quoteAuthor': "kate", 'quoteText': 'yum yum yum' }
  ]

  try {
    // ==== CORS ISSUE =========
    // const response = await fetch(proxyUrl + apiURL);
    // const data = await response.json();
    // console.log('HERE IS DATA:', data)

    // ======= USE DUMMY DATA =========
    authorText.innerText = data[0].quoteAuthor;
    quoteText.innerText = data[0].quoteText
  } catch (error) {
    // getQuote();
    console.log('whoops, no quote', error);
  }
}

// On Load
getQuote();