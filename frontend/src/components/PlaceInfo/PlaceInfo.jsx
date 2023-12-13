import { useLand } from '../../context/LandContext';
import TreePurchaseForm from '../TreePurchaseForm/TreePurchaseForm';

const PlaceInfo = ({ place }) => {
  const { purchase } = useLand();

  const typeExample = [
    {
      id: 3,
      name: 'Palmera1',
      price: 10,
      common_name: 'Palmeraa',
      scientific_name: 'PArlmeprapalmera',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6d34XqoJmjQ2LwJJa3jDi7l9DlT48s3_w8yPN68QtA&s',
    },

    {
      id: 5,
      name: 'Palmera2',
      price: 15,
      common_name: 'Palmeraa',
      scientific_name: 'PArlmeprapalmera',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6d34XqoJmjQ2LwJJa3jDi7l9DlT48s3_w8yPN68QtA&s',
    },

    {
      id: 9,
      name: 'Palmera3',
      price: 20,
      common_name: 'Palmeraa',
      scientific_name: 'PArlmeprapalmera',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6d34XqoJmjQ2LwJJa3jDi7l9DlT48s3_w8yPN68QtA&s',
    },
  ];
  return (
    <div>
      <div>Datos Purchase: {JSON.stringify(purchase)}</div>
      <h3>{place.place}</h3>
      <p>{place.description}</p>
      <TreePurchaseForm
        // type_tree={place.type_tree.length < 1 ? typeExample : place.type_tree}
        type_tree={typeExample}
        max_amount={place.ammount}
      />
    </div>
  );
};

export default PlaceInfo;
