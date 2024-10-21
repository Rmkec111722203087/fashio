import React, { useState } from 'react';

const MyCollection = () => {
  const [cards, setCards] = useState([]); // MyCollection-specific data
  const [showModal, setShowModal] = useState(false);
  const [newCard, setNewCard] = useState({ title: '', text: '', image: null });

  const addCard = () => {
    if (newCard.title && newCard.text && newCard.image) {
      setCards([...cards, { id: cards.length + 1, title: newCard.title, text: newCard.text, image: newCard.image }]);
      setNewCard({ title: '', text: '', image: null });
      setShowModal(false);
    }
  };

  return (
    <div>
      <h2>My Collection</h2>

      <div className="d-flex justify-content-center mb-4">
        <button 
          className="btn btn-success" 
          onClick={() => setShowModal(true)} 
          style={{ fontSize: '30px', borderRadius: '50%', width: '60px', height: '60px' }}
        >
          +
        </button>
      </div>

      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <div className="card">
              {card.image && <img src={card.image} alt="Card" className="card-img-top" />}
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for adding new card */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Item to My Collection</h5>
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
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => setNewCard({ ...newCard, image: reader.result });
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </div>
                  {newCard.image && <img src={newCard.image} alt="Preview" className="img-fluid mb-2" />}
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCollection;
