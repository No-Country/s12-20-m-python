
import styles from './UserCategory.module.css';

const categoryText=[
    {id: 1, quatity: 'De 0 a 10 ejemplares', category: "Guardián de Madera"},
    {id: 2, quatity: 'De 10 a 50 ejemplares', category: "Guardián de Hierro"},
    {id: 3, quatity: 'De 50 a 100 ejemplares', category: "Guardián de Plata"},
    {id: 4, quatity: 'De 100 a 200 ejemplares', category: "Guardián de Oro"},
    {id: 5, quatity: 'De 200 a 500 ejemplares', category: "Guardián de Platino"}
]


const UserCategory = () => {
  return (
    <div className={styles.UserCategoryBox}>
        <h3>Mejorá tu categoría de Guardián</h3>
        {categoryText.map((item, key)=>(
        <div key={key} className={item.id === 1 ? styles.selected :styles.ejemplares}>
        
            <div>
            <p className={item.id=== 1 ? styles.your : styles.notYour}>Tu categoría actual</p>
            <h3>{item.category}</h3>
            <p>{item.quatity}</p>
            </div>

        </div>
 ))}
    </div>
  )
}

export default UserCategory