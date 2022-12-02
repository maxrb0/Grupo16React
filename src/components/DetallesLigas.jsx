import { Component } from "react";

class DetallesLigas extends Component{
    constructor(){
        super();
        this.state= null;
    }

    render(){
        return(
            <div className="container-detalleliga item-liga">
                <div className="barra"><h1>Ligas en la base de datos</h1></div>
                <div className="detalleliga">
                <div className="item-detalleliga"><p>Laliga</p></div>
                <div className="item-detalleliga"><p>Laliga</p></div>
                <div className="item-detalleliga"><p>Laliga</p></div>
                <div className="item-detalleliga"><p>Laliga</p></div>
                <div className="item-detalleliga"><p>Laliga</p></div>
                <div className="item-detalleliga"><p>Laliga</p></div>
                </div>
            </div>
        );
    }

}
export default DetallesLigas;