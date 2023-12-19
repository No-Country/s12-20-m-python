import { BiRuler } from "react-icons/bi";
import styles from './TreeInfo.module.css'
import { BiHeart } from "react-icons/bi";


const leave= <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" >
<path d="M2.05001 4.05C-0.679993 6.78 -0.679993 11.2 2.03001 13.93C3.50001 10.53 6.12001 7.69 9.39001 6C6.62001 8.34 4.68001 11.61 4.00001 15.32C6.60001 16.55 9.80001 16.1 11.95 13.95C15.43 10.47 16 0 16 0C16 0 5.53001 0.57 2.05001 4.05Z" fill="#323232"/>
</svg>

const TreeInfo = () => {
  return (
    <div className={styles.dataBox}>
        <div className={styles.treeData}>
            <div>
            <BiRuler size={24} className={styles.rulerRotate} />
            </div>
            <p className={styles.messures}>Altura</p>
            <p className={styles.numbers}>1,5 m</p>
        </div>
        <div className={styles.treeData}>
            <div>
            <BiRuler size={24} className={styles.icon} />
            </div>
            <p className={styles.messures}>Ancho</p>
            <p className={styles.numbers}>0,10 m</p>
            
        </div>
        <div className={styles.treeData}>
        <div>
        <p className={styles.leave}>{leave}</p>  
        </div>
            <p className={styles.messures}>CO2</p>
            <p className={styles.numbers}>0,5 kg</p>
        </div>
        <div className={styles.treeData}>
            <div>
        <BiHeart size={24} className={styles.icon} /> 
        </div>
            <p className={styles.messures}>Salud</p>
            <p className={styles.numbers}>Óptimo</p>
        </div>
    </div>
  )
}

export default TreeInfo