/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/***
* Below I have created arrays and several functions that will generate new quotes
* every time we click on a "get quote" button
/**

const quotes = [  //Created an array to hold my quotes objects
  {
    quote: 'be alright',
    source: 'Valerie'
  },
  {
    quote: 'Crying all night',
    source: 'Juan',
    citation: 'ya girl is lit',
  },
  {
    quote: 'Barbie loves me',
    source: 'Baba',
    year: '2013',
  },
  {
    quote: 'My baby loves me',
    source: 'Serena',
  },
  {
    quote:'You stole my cookie!',
    source:'Me',
  }
];

/* function that will generate a random number and will use it to locate a
random quote in the array and return it */

function getRandomQuote(arr) {
  let randomNumber = ''
  randomNumber += Math.floor(Math.random() * arr.length);
  let randomQuote = arr[randomNumber]
  return randomQuote
}

/* function that will use the output of the getRandomQuote function and
and interpolate it into HTML tags to display on page*/
function printQuote() {
  const getQuote = getRandomQuote(quotes)
  let storeHTML =  `<p class = "quote"> ${getQuote.source} </p>
                    <p class = "source"> ${getQuote.quote}`


  if (getQuote.citation) {  //Used conditional statement to find citation property
    storeHTML+= `<span class = "citation"> ${getQuote.citation} </span>`
  } if (getQuote.year) {  //Used conditional statemet to find year property
    storeHTML+= `<span class="year"> ${getQuote.year}</span>`
  }
  `</p>`
  return document.getElementById('quote-box').innerHTML = storeHTML;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
