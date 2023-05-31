import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Profile from "./Components/Profile";
import Timer from "./Components/Timer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "Kais Jemmali",
      show: false,
    };
  }
  render() {
    const showProfile = () => {
      this.setState({ show: !this.state.show });
    };
    return (
      <div style={styles.container}>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          {this.state.fullName}
        </h1>
        <Button
          variant="primary"
          onClick={showProfile}
          style={{ marginLeft: "120px" }}
        >
          {this.state.show ? "Hide Profile" : "Show Profile"}{" "}
        </Button>
        {this.state.show && <Profile />}
        <Timer />
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "lightgray",
    padding: "20px",
    width: "400px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "100px",
    borderRadius: "10px",
  },
};

export default App;
