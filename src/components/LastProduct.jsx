import { Component } from "react";
import barcelona from "./barcelona.png";
class LastProduct extends Component {
  constructor() {
    super();
    this.state = null;
  }

  render() {
    return (
      <div className="item-last">
        <h1>Ultimo producto creado</h1>
        <div className="item">
          <div className="last-imgs">
            <img src={barcelona} alt="" />
            <img src={barcelona} alt="" />
          </div>
          <div className="last-detail">
            <p>Name</p>
            <p>Category</p>
            <p>Price</p>
            <p>description</p>
          </div>
        </div>
      </div>
    );
  }
}
export default LastProduct;
