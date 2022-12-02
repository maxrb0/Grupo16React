import DetallesLigas from "./DetallesLigas";
// import ItemGeneral from "./ItemGeneral";
import LastProduct from "./LastProduct";
import TotalLigas from "./TotalLigas";
import TotalProducts from "./TotalProducts";
import TotalUsarios from "./TotalUsers";
import LastUser from "./LastUser";

function Main() {
  return (
    <main className="grid-layout">
      <div className="panels">
        {/* <ItemGeneral name="Usuarios" numero={10}/>
        <ItemGeneral name="Ligas" numero={5}/>
        <ItemGeneral name="Productos" numero={50}/> */}

        <TotalUsarios />
        <TotalLigas />
        <TotalProducts />
      </div>
      <div className="container-detalle-last">
        <LastProduct />
        <DetallesLigas />
        <LastUser />
      </div>
    </main>
  );
}

export default Main;
