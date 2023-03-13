import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="boxscore">
        <div className="boxscore__team boxscore__team--header">
          <label></label>
          <div className="boxscore__team__units">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
          </div>
          <div className="boxscore__team__results">
            <span>R</span>
            <span>H</span>
            <span>E</span>
          </div>
        </div>
        <div className="boxscore__team boxscore__team--away">
          <label>CHC</label>
          <div className="boxscore__team__units">
            <span>1</span>
            <span>0</span>
            <span>2</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>1</span>
            <span>1</span>
          </div>
          <div className="boxscore__team__results">
            <span>5</span>
            <span>12</span>
            <span>0</span>
          </div>
        </div>
        <div className="boxscore__team boxscore__team--home">
          <label>STL</label>
          <div className="boxscore__team__units">
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>3</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>1</span>
          </div>
          <div className="boxscore__team__results">
            <span>4</span>
            <span>8</span>
            <span>1</span>
          </div>
        </div>
        <div className="boxscore__details">
          <div className="boxscore__details__team boxscore__details__team--away">
            <p>
              <strong>Cubs</strong>
              <small>CHC</small>
            </p>
            <span>56-38</span>
          </div>
          <div className="boxscore__details__info">
            <strong>
              Btm
              <br />
              9th
            </strong>
          </div>
          <div className="boxscore__details__team boxscore__details__team--home">
            <p>
              <strong>Cardinals</strong>
              <small>STL</small>
            </p>
            <span>56-38</span>
          </div>
        </div>
      </div>

      <div className="boxscore">
        <div className="boxscore__team boxscore__team--header">
          <label></label>
          <div className="boxscore__team__units">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
          <div className="boxscore__team__results">
            <span>TOTAL</span>
          </div>
        </div>
        <div className="boxscore__team boxscore__team--away">
          <label>NYJ</label>
          <div className="boxscore__team__units">
            <span>0</span>
            <span>3</span>
            <span>0</span>
            <span>7</span>
          </div>
          <div className="boxscore__team__results">
            <span>10</span>
          </div>
        </div>
        <div className="boxscore__team boxscore__team--home">
          <label>NE</label>
          <div className="boxscore__team__units">
            <span>14</span>
            <span>3</span>
            <span>7</span>
            <span>10</span>
          </div>
          <div className="boxscore__team__results">
            <span>33</span>
          </div>
        </div>
        <div className="boxscore__details">
          <div
            className="boxscore__details__team boxscore__details__team--away"
            style={{ background: "#203731" }}
          >
            <p>
              <strong>JETS</strong>
              <small>NYJ</small>
            </p>
            <span>56-38</span>
          </div>
          <div className="boxscore__details__info">
            <strong>Final</strong>
          </div>
          <div
            className="boxscore__details__team boxscore__details__team--home"
            style={{ background: "#002244" }}
          >
            <p>
              <strong>PATRIOTS</strong>
              <small>NE</small>
            </p>
            <span>56-38</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;