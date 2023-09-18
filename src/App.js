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
        <span>
          {days} dager {hours} timer {minutes} minutter {seconds} sekunder
        </span>
      );
    }
  };

  return (
    <div className="App">
      <span>Tid til FAT:</span>
      <br />
      <Countdown date={new Date("2023-10-02T09:00:00")} renderer={renderer}>
        <Completionist />
      </Countdown>
    </div>
  );
}

export default App;
