function ItemGeneral(props){
    return(
        <div>
            <h1>Total de {props.name}</h1>
            <p>{props.numero}</p>
        </div>
    );
}

export default ItemGeneral;