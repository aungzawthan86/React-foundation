import { Component } from "react";
import BasicFigure from "./BasicFigure";

class FigureList extends Component {
  render() {
    return (
      <>
        <BasicFigure filename="dog.jpg" caption="Mikel" />
        <BasicFigure filename="cat.jpeg" caption="Shwe War" />
        <BasicFigure filename="chicken.jpg" caption="Byar Gyi" />
      </>
    );
  }
}
export default FigureList;
