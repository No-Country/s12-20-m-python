import { useState } from 'react';
import styles from './EditableField.module.css';
import { FaEdit } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import { useLand } from '../../context/LandContext';

function EditableField({ initialText, adoptionId }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const { setAdoptionData } = useLand();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);

    setAdoptionData((prev) => {
      const newData = prev.map((item) =>
        item.adoptionId === adoptionId
          ? { ...item, customName: text.trim() }
          : item,
      );

      return newData;
    });
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className={styles.editableFieldContainer}>
      {isEditing ? (
        <input type='text' value={text} onChange={handleChange} />
      ) : (
        <h5>{text}</h5>
      )}
      <div onClick={isEditing ? handleSaveClick : handleEditClick}>
        {isEditing ? (
          <div className={styles.editableFieldButton}>
            <FaSave /> Guardar
          </div>
        ) : (
          <div className={styles.editableFieldButton}>
            <FaEdit /> Editar
          </div>
        )}
      </div>
    </div>
  );
}

export default EditableField;
