class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <button {...this.props}>{this.props.children}</button>
      </>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      tens: 0,
      canDisable: false,
      addZeroToTens: true,
      addZeroToSeconds: true,
      Interval: "",
    };

    this.onStart = this.onStart.bind(this);
    this.timer = this.timer.bind(this);
    this.onPause = this.onPause.bind(this);
    this.onReset = this.onReset.bind(this);
  }
  onStart = (state) => {
    this.setState({ tens: this.state.tens + 1 });

    if (this.state.tens < 9) {
      this.setState({ tens: this.state.tens });
    }

    if (this.state.tens > 9) {
      this.setState((state) => ({
        tens: state.tens,
        addZeroToTens: false,
      }));
    }

    if (this.state.tens > 99) {
      this.setState((state) => ({
        seconds: state.seconds + 1,
        tens: 0,
        addZeroToTens: true,
      }));
    }

    if (this.state.seconds > 9) {
      this.setState((state) => ({
        addZeroToSeconds: false,
      }));
    }
  };
  timer = () => {
    this.setState((state) => ({
      tens: 1,
    }));

    this.state.Interval = setInterval(this.onStart, 10);
    if (this.state.canDisable) {
      document.getElementById("btn").disabled = true;
    }
  };
  onPause = () => {
    clearInterval(this.state.Interval);
  };
  onReset = () => {
    clearInterval(this.state.Interval);
    if (this.state.canDisable) {
      document.getElementById("btn").disabled = false;
    }
    this.setState((state) => ({
      seconds: 0,
      tens: 0,
      addZeroToTens: true,
      addZeroToSeconds: true,
    }));
  };
  render() {
    return (
      <div className="wrapper">
        <h1>
          <span id="seconds">
            {this.state.addZeroToSeconds && "0"} {this.state.seconds}
          </span>
          :
          <span id="tens">
            {this.state.addZeroToTens && "0"} {this.state.tens}
          </span>
        </h1>
        <Button id="btn" onClick={this.timer}>
          Start
        </Button>
        <Button onClick={this.onPause}>Stop</Button>
        <Button onClick={this.onReset}>Reset</Button>
        {/*     <span>Tens: {this.state.tens}</span> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
