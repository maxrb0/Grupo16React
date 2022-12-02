import { Component } from "react";

class LastUser extends Component {
  constructor() {
    super();
    this.state = null;
  }

  render() {
    return (
      <div className="last-user">
        <h1>Ultimo Usuario registrado</h1>
        
        <div className="last-user-item">
        <p>Nombre</p>
        <p>NickName</p>
        <p>Email</p>
        </div>

      </div>
    );
  }
}
export default LastUser;
