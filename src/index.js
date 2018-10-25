import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const tShirtSizes = [
  {
    name: "X-Small",
    teamWeeks: "1-2",
    personWeeks: "8-16"
  },
  {
    name: "Small",
    teamWeeks: "2-4",
    personWeeks: "16-32"
  },
  {
    name: "Medium",
    teamWeeks: "4-8",
    personWeeks: "32-64"
  },
  {
    name: "Large",
    teamWeeks: "8-12",
    personWeeks: "64-96"
  },
  {
    name: "Too-Big",
    teamWeeks: "12+",
    personWeeks: "96+"
  }
];

let interval;

const logo =
  "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik05Ni43LDEwLjhMNjUsNi40Yy0wLjUtMC4xLTAuOSwwLjEtMS4yLDAuNWMtMy40LDQuNi04LjUsNy43LTE0LjIsOC41Yy01LjcsMC44LTExLjQtMC42LTE2LjEtNCAgYy0wLjQtMC4zLTAuOS0wLjMtMS4zLTAuMUwyLjcsMjQuN2MtMC42LDAuMy0wLjksMS0wLjcsMS42bDcuOCwyMC4xYzAuMywwLjcsMSwxLDEuNywwLjdMMjQuNyw0Mmw4LjEsNTEuNWMwLjEsMC43LDAuOCwxLjIsMS41LDEuMSAgbDUyLjQtNy43YzAuNy0wLjEsMS4yLTAuNywxLjEtMS40bC03LjEtNTEuN2wxNC4yLDEuMWMwLjcsMC4xLDEuMy0wLjUsMS40LTEuMmwxLjctMjEuNUM5Ny44LDExLjUsOTcuMywxMC45LDk2LjcsMTAuOHogTTYwLjUsMzkuMSAgbC0xLjYtMTAuNmwxMi43LTEuOWwxLjYsMTAuNkM3My4yLDM3LjIsNjkuMiw0Ni4zLDYwLjUsMzkuMXoiPjwvcGF0aD48L3N2Zz4=";

class SizePredict extends React.Component {
  state = {
    size: tShirtSizes[0]
  };

  spin() {
    this.setState({
      anim: false
    });

    interval = setInterval(() => {
      const rnd = parseInt(Math.random() * tShirtSizes.length);

      this.setState({
        size: tShirtSizes[rnd]
      });
    }, 40);

    setTimeout(() => {
      clearInterval(interval);
      this.setState({
        anim: true
      });
    }, 1000);
  }

  render() {
    return (
      <div className={this.state.anim ? "in" : "out"}>
        <h1 className="size">{this.state.size.name}</h1>
        <div>
          Weeks: Team {this.state.size.teamWeeks}, Person{" "}
          {this.state.size.personWeeks}
        </div>
        <br />
        <button onClick={() => this.spin()}>PREDICT</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" />
      <header>
        <div class="inner">
          <div>
            <h1>Sized!</h1>
            <i>The T-Shirt Size Predictor</i>
          </div>
        </div>
      </header>
      <section>
        <SizePredict />
        <blockquote>
          <b>
            Sized! <i>(The T-Shirt Size Predictor)</i>
          </b>{" "}
          uses cutting edge machine learning algorithms to define statistically
          meaningful T-Shirt Sizes for both Agile and Waterfall projects.
        </blockquote>
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
