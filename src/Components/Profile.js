import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      Bio: "I'm learning FullStack Developement",
      Profession: "CEO",
      imgUrl:
        "https://1fid.com/wp-content/uploads/2022/06/cool-profile-picture-2-1024x1024.jpg",
    };
  }
  render() {
    return (
      <div>
        <img
          src={this.state.imgUrl}
          alt="myPhoto"
          style={{
            borderRadius: "100%",
            width: "200px",
            height: "200px",
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "90px",
          }}
        />
        <h3
          style={{
            textAlign: "center",
          }}
        >
          {this.state.Bio}
        </h3>
        <h4
          style={{
            textAlign: "center",
          }}
        >
          {this.state.Profession}
        </h4>
      </div>
    );
  }
}

export default Profile;
