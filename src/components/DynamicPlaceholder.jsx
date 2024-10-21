import React, { useState } from 'react';

const DynamicPlaceholder = ({ cards, onAddCard }) => {
  const [newCard, setNewCard] = useState({ title: '', text: '', image: null });
  const [showModal, setShowModal] = useState(false);

  // Function to handle adding new cards
  const addCard = () => {
    if (newCard.title && newCard.text && newCard.image) {
      onAddCard({
        id: Date.now(), // unique ID
        title: newCard.title,
        text: newCard.text,
        image: newCard.image,
      });
      setNewCard({ title: '', text: '', image: null }); // Reset fields
      setShowModal(false); // Close the modal
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCard({ ...newCard, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mt-5">
      <button 
        className="btn btn-success mb-3" 
        onClick={() => setShowModal(true)}
        style={{ position: 'absolute', right: '20px', top: '20px' }} 
      >
        +
      </button>

      {/* Modal for Adding New Card */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Card</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => { e.preventDefault(); addCard(); }}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="title" 
                      value={newCard.title}
                      onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="text" className="form-label">Text</label>
                    <textarea 
                      className="form-control" 
                      id="text" 
                      rows="3" 
                      value={newCard.text}
                      onChange={(e) => setNewCard({ ...newCard, text: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">Upload Image</label>
                    <input 
                      type="file" 
                      className="form-control" 
                      id="image" 
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                  {newCard.image && (
                    <div className="mb-3">
                      <img src={newCard.image} alt="Preview" className="img-fluid mb-2" />
                      <button 
                        type="button" 
                        className="btn btn-danger" 
                        onClick={() => setNewCard({ ...newCard, image: null })}
                      >
                        Remove Image
                      </button>
                    </div>
                  )}
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="row">
        {cards.length === 0 ? (
          <p>No cards available.</p>
        ) : (
          cards.map((card) => (
            <div className="col-md-4" key={card.id}>
              <div className="card">
                {card.image && <img src={card.image} alt="Card image" className="card-img-top" />}
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DynamicPlaceholder;
