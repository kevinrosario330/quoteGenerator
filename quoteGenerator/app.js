
 const quoteApi = " https://zenquotes.io/api/quotes";
 const tw = document.querySelector(".tweetBtn");
 let btn = document.querySelector(".next-quote");
 let quote = document.querySelector(".quote");
 let authors = document.querySelector(".authors");


 generateQuote();
btn = addEventListener("click", generateQuote);




 async function generateQuote(){
    fetch("https://stoic.tekloon.net/stoic-quote")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      authors.textContent = data.author;
      quote.textContent = data.quote;
    });

}