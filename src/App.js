import logo from "./logo.svg";
import "./App.css";
import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;

function App() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="main">
          <h1 data-heading="SHINE">Tid til FAT</h1>
          <div className="timer">
            {days} dager {" "}
            {hours} timer{" "}
            {minutes} minutter
            <p></p>
            {seconds} sekunder
          </div>
        </div>
      );
    }
  };

  return (
    <div className="App">
      
      <br />
      <Countdown date={new Date("2023-10-02T09:00:00")} renderer={renderer}>
        <Completionist />
      </Countdown>
    </div>
  );
}

export default App;
