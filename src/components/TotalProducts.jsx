import { Component } from "react";

class TotalProducts extends Component {
  constructor() {
    super();
    this.state = null;
  }

  render() {
    return (
      <div className="item-main">
        <h1>Total de Productos</h1>
        <div className="total-products">
          <p>5</p>
          <button>Lista de productos</button>
        </div>
      </div>
    );
  }
}
export default TotalProducts;
