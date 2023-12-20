
import styles from './UserCategory.module.css';

const categoryText=[
    {id: 1, quatity: 'De 0 a 10 ejemplares', category: "Guardián de Madera"},
    {id: 2, quatity: 'De 11 a 50 ejemplares', category: "Guardián de Hierro"},
    {id: 3, quatity: 'De 51 a 100 ejemplares', category: "Guardián de Plata"},
    {id: 4, quatity: 'De 101 a 200 ejemplares', category: "Guardián de Oro"},
    {id: 5, quatity: 'Más de 200 ejemplares', category: "Guardián de Platino"}
]
let categoryLevel = 1;



const UserCategory = ({adoptionNumber}) => {

    if (adoptionNumber <= 10) {
        categoryLevel = 1;
    } else if (adoptionNumber > 10 && adoptionNumber <= 50) {
        categoryLevel = 2;
    }else if (adoptionNumber > 51 && adoptionNumber <= 100) {
        categoryLevel = 3;
    }else if (adoptionNumber > 101 && adoptionNumber <= 200) {
        categoryLevel = 4;
    }else if (adoptionNumber > 201 ) {
        categoryLevel = 5;
    }

  return (
    <div className={styles.UserCategoryBox}>
        <h3>Mejorá tu categoría de Guardián</h3>
        <p>Hasta ahora tienes {adoptionNumber} árboles adoptados.</p>
        {categoryText.map((item, key)=>(
        <div key={key} className={item.id === categoryLevel ? styles.selected :styles.ejemplares}>
        
            <div>
            <p className={item.id=== categoryLevel ? styles.your : styles.notYour}>Tu categoría actual</p>
            <h3>{item.category}</h3>
            <p>{item.quatity}</p>
            </div>

        </div>
 ))}
    </div>
  )
}

export default UserCategory