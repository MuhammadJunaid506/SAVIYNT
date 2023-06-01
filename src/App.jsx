import React, { useEffect , useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './api/users';
import {
  CREATE_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  createItem,
  updateItem,
  deleteItem,
} from './actions/itemActions';
import Nav from './components/nav';
import Drawer from './components/drawer';
import Item from './components/item.jsx';
// import ItemList from './components/itemList.jsx';
import './App.css';
import axios from 'axios';
import ItemList from './components/itemList';

function App() {
  const dispatch = useDispatch();
  const [data,setdata] = useState([])
  const items = useSelector((state) => state.items);
  const [isPopupOpen, setPopupOpen] = useState(false);
  useEffect(()=>{
    try {
    const fetchUsers = async ()=>{
      await axios.get('https://reqres.in/api/users?page=1').then((res) => {
        setdata(res.data?.data)
        console.log(res.data?.data)
      })
    }
    fetchUsers();
    }catch (error) {
    console.log(error);
  }
}, []);


  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  // useEffect(() => {
  //   dispatch(fetchUsers());

   // }, [dispatch]);

  const handleCreateItem = () => {
    const newItem = {
      id: 1, 
      name: 'New Item',
      email: 'newitem@example.com',
      image: 'https://example.com/image.jpg',
    };
    dispatch(createItem(newItem));
  };

  const handleUpdateItem = (itemId, updatedItem) => {
    dispatch(updateItem(itemId, updatedItem));
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  return (
    <>
    
    <Nav/>
    <Drawer/>
    <div className="main">
    <button className="add-button" onClick={openPopup}>
        + ADD NEW CUSTOMERS
      </button>
      <div className="line">
        <p><span>Customer ID#</span>
          <span>Customer Name</span>
          <span>Email</span></p>
      </div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
          <Item/>
            <button className="close-button" onClick={closePopup}>
              Close
            </button>
            </div>
            </div>
            )}
            <ItemList/>
    <div>
      {/* <ItemList
        items={items}
        onUpdateItem={handleUpdateItem}
        onDeleteItem={handleDeleteItem}
      /> */}
      {/* {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onUpdateItem={handleUpdateItem}
          onDeleteItem={handleDeleteItem}
        />
      ))} */}
      {/* <button onClick={handleCreateItem}>Create New Item</button> */}
    </div>
    </div>
    </>
  );
}

export default App;
