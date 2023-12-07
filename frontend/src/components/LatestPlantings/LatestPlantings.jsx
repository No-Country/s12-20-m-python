import styles from "../LatestPlantings/LatestPlantings.module.css"; // Asegúrate de tener un archivo CSS para los estilos
import Imagen1 from "../../assets/HomeFotos/imagen1.jpg";
import Imagen2 from "../../assets/HomeFotos/imagen2.jpg";
import Imagen3 from "../../assets/HomeFotos/imagen3.jpg";
import Imagen4 from "../../assets/HomeFotos/imagen4.jpg";

const lastWork = [
  {
    img: Imagen1,
    description: "17-10-2023 Siembra de Araucarias en Neuquén"
  },
  {
    img: Imagen2,
    description: "20-09-2023 Siembra de Arrayanes en Chubut"
  },
  {
    img: Imagen3,
    description: "13-08-2023 Siembra de Algarrobo Negro en Córdoba"
  },
  {
    img: Imagen4,
    description: "02-08-2023 Siembra de Quebracho Blanco en Córdoba"
  }
];
function LatestPlantings() {
  return (
    <div className={styles.container}>
      <h2>Nuestas últimas siembras</h2>
      <div className={styles.cardContainer}>
        {lastWork.map((item, index) =>
          <div className={styles.card} key={index}>
            <img src={item.img} alt="" />
            <p className={styles.description}>
              {item.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LatestPlantings;
