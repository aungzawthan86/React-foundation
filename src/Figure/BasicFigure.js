import { Component } from "react";
class BasicFigure extends Component {
  render() {
    return (
      <figure>
        <img
          style={{ width: "100px" }}
          src={this.props.filename}
          alt={this.props.caption}
        ></img>
        <figcaption>{this.props.caption}</figcaption>
      </figure>
    );
  }
}
export default BasicFigure;
