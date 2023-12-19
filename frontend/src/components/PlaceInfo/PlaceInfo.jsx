import TreePurchaseForm from '../TreePurchaseForm/TreePurchaseForm';

import styles from './PlaceInfo.module.css';

const PlaceInfo = ({ place }) => {
  return (
    <div className={styles.placeInfoContainer}>
      <h3>{place.place}</h3>
      <p>{place.description}</p>
      <h4>Seleccioná el/los árbol/es que querés adoptar:</h4>
      <TreePurchaseForm
        type_tree={place.type_tree}
        max_amount={place.ammount}
        placeId={place.id}
      />
    </div>
  );
};

export default PlaceInfo;
