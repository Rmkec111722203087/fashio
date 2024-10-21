 import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Wardrobe from './components/Wardrobe';
import Explore from './components/Explore';
import Settings from './components/Settings';

const App = () => {
  const [cards, setCards] = useState([]);

  // Function to add a new card
  const handleAddCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Pass cards to both Home and Wardrobe */}
          <Route path="/" element={<Home cards={cards} />} />
          <Route path="/wardrobe" element={<Wardrobe cards={cards} onAddCard={handleAddCard} />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
