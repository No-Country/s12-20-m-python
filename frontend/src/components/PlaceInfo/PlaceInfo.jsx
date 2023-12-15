import TreePurchaseForm from '../TreePurchaseForm/TreePurchaseForm';

const PlaceInfo = ({ place }) => {
  return (
    <div>
      <h3>{place.place}</h3>
      <p>{place.description}</p>
      <TreePurchaseForm
        type_tree={place.type_tree}
        max_amount={place.ammount}
        placeId={place.id}
      />
    </div>
  );
};

export default PlaceInfo;
