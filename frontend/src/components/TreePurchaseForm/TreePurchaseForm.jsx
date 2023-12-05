import { useState } from 'react';
import { Link} from 'react-router-dom'

const TreePurchaseForm = () => {
  const [treeTypes, setTreeTypes] = useState({
    olmo: { name: 'Olmo', price: 10, quantity: 0 },
    espinillo: { name: 'Espinillo', price: 15, quantity: 0 },
    alamo: { name: 'Álamo', price: 20, quantity: 0 },
  });

  const [total, setTotal] = useState(0);

  const handleQuantityChange = (type, quantity) => {
    const updatedTreeTypes = {
      ...treeTypes,
      [type]: { ...treeTypes[type], quantity },
    };
    setTreeTypes(updatedTreeTypes);
    calculateTotal(updatedTreeTypes);
  };

  const calculateTotal = (types) => {
    let newTotal = 0;
    Object.keys(types).forEach((type) => {
      newTotal += types[type].price * types[type].quantity;
    });
    setTotal(newTotal);
  };

/*   const handleCompraClick = () => {
    // Aquí puedes agregar la lógica para realizar la compra, por ejemplo, enviar una solicitud al servidor, etc.
    alert('¡Compra realizada con éxito!');
  }; */

  return (
    <div>
      <h2>Elegí tus árboles.</h2>
      {Object.keys(treeTypes).map((type) => (
        <div key={type}>
          <label>
            {treeTypes[type].name} - ${treeTypes[type].price} por árbol:
            <input
              type='number'
              min='0'
              value={treeTypes[type].quantity}
              onChange={(e) =>
                handleQuantityChange(type, parseInt(e.target.value, 10))
              }
            />
          </label>
        </div>
      ))}
      <div>
        <h4>Total: ${total}</h4>
      </div>
      <Link to='/login'>
      <button /* onClick={handleCompraClick} */>Continuar</button>
      </Link>
     
    </div>
  );
};

export default TreePurchaseForm;
