import React, { useState } from 'react';


const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-handle" onClick={toggleDrawer}>
        <img src="path/to/small-pic.png" alt="+" />
      </div>
      {isOpen && (
        <>
        <h2>SAVIYNT</h2>
        <div className="drawer-content">
          <img src="path/to/small-pic.png" alt="-" />
          <span>CUSTOMERS</span>
        </div>
        </>
      )}
    </div>
    </>
  );
};

export default Drawer;
