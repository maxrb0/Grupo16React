import DetallesLigas from "./DetallesLigas";
import LastProduct from "./LastProduct";
import TotalLigas from "./TotalLigas";
import TotalProducts from "./TotalProducts";
import TotalUsarios from "./TotalUsers";

function Main() {
  return (
    <>
      <main className="container-main">
        <TotalUsarios />
        <TotalLigas />
        <TotalProducts />
      </main>
      <div className="container-detalle-last">
        <DetallesLigas />
        <LastProduct />
      </div>
    </>
  );
}

export default Main;
