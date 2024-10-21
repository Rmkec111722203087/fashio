import React, { useState } from 'react';
import MyCollection from './MyCollection';
import AddOns from './AddOns';

const Wardrobe = () => {
  const [view, setView] = useState('MyCollection'); // Track which page to display

  return (
    <div className="container mt-5">
      <h1>Wardrobe</h1>

      {/* Buttons for selecting views */}
      <div className="d-flex justify-content-center mb-4">
        <button 
          className={`btn btn-primary me-3 ${view === 'MyCollection' ? 'active' : ''}`}
          style={{ width: '200px', height: '50px' }}
          onClick={() => setView('MyCollection')}
        >
          My Collection
        </button>
        <button 
          className={`btn btn-secondary ${view === 'AddOns' ? 'active' : ''}`}
          style={{ width: '200px', height: '50px' }}
          onClick={() => setView('AddOns')}
        >
          Add-Ons
        </button>
      </div>

      {/* Render the selected view */}
      {view === 'MyCollection' ? <MyCollection /> : <AddOns />}
    </div>
  );
};

export default Wardrobe;
