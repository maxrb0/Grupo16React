import { Component } from "react";

class TotalUsarios extends Component{
    constructor(){
        super();
        this.state= null;
    }

    render(){
        return(
            <div className="item-panel">
                <h1>Total de Usarios</h1>
                <p>10</p>
            </div>
        );
    }

}
export default TotalUsarios;