import { Component } from "react";

class LastProduct extends Component{
    constructor(){
        super();
        this.state= null;
    }

    

    render(){
        return(
            <div className="item-last">
                <h2 className="barra">Ultimo producto creado</h2>
                <div className="item">
                    <p>Name</p>
                    <p>Category</p>
                    <p>Price</p>
                    <p>description</p>
                </div>
            </div>
        );
    }

}
export default LastProduct;