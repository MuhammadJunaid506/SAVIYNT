import React, { useState } from 'react';
import './item.css';

const Item = ({ onUpdateItem, onDeleteItem }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);

  const handleAddItem = () => {
    if (!name || !email || !image) {
      alert('Please fill in all fields');
      return;
    }

    const newItem = {
      name,
      email,
      image,
    };

    onUpdateItem(newItem);

    setName('');
    setEmail('');
    setImage(null);
  };

  const handleDeleteItem = () => {
    onDeleteItem(item.id);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='it'>
      <img src={image} alt={name} />
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Upload Photo:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <button onClick={handleAddItem}>Add Customer</button>
    </div>
  );
};

export default Item;
