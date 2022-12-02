import { Component } from "react";
import laliga from "./laliga.png";

class DetallesLigas extends Component {
  constructor() {
    super();
    this.state = null;
  }

  render() {
    return (
      <div className="container-detalleliga item-liga">
        <h1>Ligas en la base de datos</h1>
        <div className="detalleliga">
          <div className="item-detalleliga">
            <p>Laliga</p> <img src={laliga} alt="" />
          </div>
          <div className="item-detalleliga">
            <p>Laliga</p>
            <img src={laliga} alt="" />
          </div>
          <div className="item-detalleliga">
            <p>Laliga</p>
            <img src={laliga} alt="" />
          </div>
          <div className="item-detalleliga">
            <p>Laliga</p>
            <img src={laliga} alt="" />
          </div>
          <div className="item-detalleliga">
            <p>Laliga</p>
            <img src={laliga} alt="" />
          </div>
          <div className="item-detalleliga">
            <p>Laliga</p>
            <img src={laliga} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
export default DetallesLigas;
