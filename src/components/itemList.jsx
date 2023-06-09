import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createItem, updateItem, deleteItem } from '../actions/itemActions';
import './itemList.css';

const ItemList = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('https://reqres.in/api/users?page=1');
        setData(res.data?.data);
        console.log(res.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const handleCreateItem = () => {
    const newItem = {
      id: 1,
      name: 'New Item',
      email: 'newitem@example.com',
      avatar: 'https://example.com/image.jpg',
    };
    dispatch(createItem(newItem));
  };

  const handleEditItem = (item) => {
    const editedName = window.prompt('Enter the new name:', item.name);
    const editedEmail = window.prompt('Enter the new email:', item.email);

    if (editedName && editedEmail) {
      const updatedItem = {
        ...item,
        name: editedName,
        email: editedEmail,
      };
      dispatch(updateItem(item.id, updatedItem));
    }
  };

  const handleDeleteItem = (item) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete item with ID ${item.id}?`);
    if (confirmDelete) {
      dispatch(deleteItem(item.id));
    }
  };

  return (
    <div className="item-list">

      {data.sort((a, b) => a.id - b.id).map((item) => (
        <div className="data-row" key={item.id}>
          <div className="data-cell">
            <img src={item.avatar} alt={item.name} />
          </div>
          <div className="data-cell1">{item.id}</div>
          <div className="data-cell2">
            {item.first_name} {item.last_name}
          </div>
          <div className="data-cell4">{item.email}</div>
          <div className="data-cell5">
            <button className="edit-button" onClick={() => handleEditItem(item)}>
              Edit
            </button>
          </div>
          <div className="data-cell5">
            <button className="delete-button" onClick={() => handleDeleteItem(item)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

