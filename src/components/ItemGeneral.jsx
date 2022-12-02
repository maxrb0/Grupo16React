import CalculoApi from "./CalculoApi";

function ItemGeneral(props){
    return(
        <div className="item-panel">
            <h1>Total de {props.name}</h1>
            <CalculoApi value={1} />
        </div>
    );
}

export default ItemGeneral;