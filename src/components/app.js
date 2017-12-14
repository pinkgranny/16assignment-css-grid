import React from "react"
import a from "assets/a.png"
import and from "assets/and.png"
import curly from "assets/curly_bracet.png"

class App extends React.Component {

  render() {
    return (
      <div className="cssGrid">
        <h1>Using CSS grid!</h1>
        <ul className="grid-container">
          <li className="wide">
            <h1>Helvetica</h1>
            <h3>DESIGNED BY</h3>
            <p>Max Miedinger 1957</p>
          </li>
          <li className="wide tall a" style={{ backgroundImage: `url(${a})` }} />

          <li className="tall curly" style={{ backgroundImage: `url(${curly})` }} />

          <li className="and" style={{ backgroundImage: `url(${and})` }} />

          <li className="bgBlack">
            <h2 className="grey">USAGE</h2>
          </li>
          <li><h2>WIDTHS &amp; HEIGHTS</h2>
          </li>
          <li>
            <h2>STROKES</h2></li>
          <li className="grey">
            <h2>PUNCTUATION</h2>
          </li>
          <li className="bgBlack wide large">"I don't care what it says, as long as it's in Helvetica"</li>
          <li className="wide large">ABCDEFGHIJKLMNOPQRSTUVWXYZ</li>
          <li className="white bgBlack">HELVETICA -THE MOVIE</li>
        </ul>
      </div>
    )
  }

}

export default App
