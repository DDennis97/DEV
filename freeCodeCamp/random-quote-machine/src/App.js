import { useEffect, useState } from "react";
import './App.css';
import COLORS_ARRAY from "./colorsArray";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [quoteInfo, setQuoteInfo] = useState({});
  const [accentColor, setAccentColor] = useState("#9139b5");
  
  useEffect(() => {
   getQuote();
}, [])

const getQuote = () => {
  fetch("https://api.quotable.io/random")
   .then((response) => {
    return response.json()
  })
   .then((data) => {
    setQuoteInfo({
      text: data.content,
      author: data.author
    })
    
    setAccentColor(COLORS_ARRAY[randomInteger])
   });
};
const randomInteger = Math.floor(Math.random() * 10) + 1;


  return (
    <div className="App" style={{backgroundColor: accentColor, color: accentColor}}>
      <div id="quote-box">
      <p id="text" style={{color: accentColor}}>{quoteInfo.text}</p>
      <p id="author" style={{color: accentColor}}>{quoteInfo.author}</p>
      <div className="actions">
      <button id="new-quote" onClick={getQuote} style={{backgroundColor: accentColor}}>New Quote</button>
      <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text' + quoteInfo.text} id="tweet-quote" style={{backgroundColor: accentColor}}><FontAwesomeIcon icon={faEnvelope} /></a>
      </div>
      </div>
    </div>
  );
}

export default App;
