
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quoteInfo,setQuoteInfo] = useState({})
  useEffect(() =>{
    getQuote();

},[]);

async function getQuote(){
  const response = await fetch('https://api.quotable.io/random')
  const quote = await response.json()
  setQuoteInfo({
    text:quote.content,
    author:quote.author
  })
}
  return (
    
    <div className="App">
      <div id="quote-box">
        <p id="text">{quoteInfo.text}</p>
        <p id="author">{quoteInfo.author}</p>
        <button id="new-quote" className="buttons" onClick={getQuote}>New Quote</button>
        <a id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+quoteInfo.text}>Twitter</a>
      </div>
    </div>
  );
}

export default App;
