import './App.css';
import { useState } from "react";
import { marked } from "marked";


function App() {
  const [text, setText] = useState(`
  # Markdown Previewer
  ## State Hook
  
  Import des useState Hooks aus React

  \`import React, { useState } from 'react';\`


  Deklariere eine neue State Variable, die wir "count" nennen werden
  \`\`\`
  function Example() {
    const [count, setCount] = useState(0);
  \`\`\`

  \`\`\`
  return (
    <div>
      <p>Du hast mich {count} mal geklickt</p>
      <button onClick={() => setCount(count + 1)}>
        Klick mich
      </button>
    </div>
  );
}
  \`\`\`

  
  Klassenbeispiel:
  \`\`\`
  class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div>
          <p>du hast mich {this.state.count} 
          mal geklickt</p>
          <button onClick={() => 
            this.setState({ count: this.state.count + 1 }
              )}>Klick mich
          </button>
        </div>
      );
    }
  }
  \`\`\`
Der State beginnt mit { count: 0 } und wenn der Benutzer 
auf einen Button klickt, erhöhen wir state.count, indem 
this.setState() verwendet wird. 

- Wir können einen lokalen State in einer Funktionskomponente 
halten, indem wir die useState-Hook aus React importieren.

- Wir deklarieren eine neue State-Variable innerhalb der 
Komponente durch einen Aufruf des useState-Hooks. Dies erzeugt 
ein Tupel, dessen Inhalte wir Namen zuweisen. Da unsere 
Variable die Anzahl der Button-Klicks beinhaltet, nennen wir
sie „Count“. Wir geben 0 als einziges Argument an useState.
Die zweite Variable, die zurückgegeben wird, ist eine Funktion. 
Diese wird als setCount bezeichnet und aktualisiert den Wert 
von count.
- Wenn ein Benutzer auf den Button klickt, wird setCount mit 
einem neuen Wert aufgerufen. Anschließend rendert React die 
Komponente erneut und gibt ihr den neuen Wert für den 
Count-State.

> blockquote Hooks sind ein neues Feature in React 16.8.
   

![React](logo192.png)
**React - Markdown Previewer Project**
[@freeCodeCamp]()



`);

  marked.setOptions({
    breaks: true
  })

  return (
  <div className="App">
      <textarea id="editor" onChange={(event) => {
        setText(event.target.value);
      }}
      value={text}>
      </textarea>
      <div id="preview" dangerouslySetInnerHTML={{
        __html: marked(text),
      }}>
      </div>    
   
  </div>
  );
}

export default App;
