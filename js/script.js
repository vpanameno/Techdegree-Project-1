/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*
Below I have created arrays and several functions that will generate new quotes
every time we click on a "get quote" button
*/

const quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling.',
    source: 'Nelson Mandela',
  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    source: 'Eleanor Roosevelt',
    citation: 'blog.hotspot.com',
  },
  {
    quote: 'Life is what happens when you are busy making other plans.',
    source: 'John Lennon',
    year: '1966',
  },
  {
    quote: 'It is during our darkest moments that we must focus to see the light.',
    source: 'Aristotle',
  },
  {
    quote:'You will face many defeats in life, but never let yourself be defeated.',
    source:'Maya Angelou',
  }
];

/* function that will generate a random number and will use it to locate a
random quote in the array and return it */

function getRandomQuote(quotes) {

  let randomNumber = ''
  randomNumber += Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber]

  return randomQuote
}

/* function that will use the output of the getRandomQuote function and
and interpolate it into HTML tags to display on page */
function printQuote() {
  const getQuote = getRandomQuote(quotes)

  let storeHTML =  `<p class = "quote"> ${getQuote.quote} </p>
                    <p class = "source"> ${getQuote.source}`


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
