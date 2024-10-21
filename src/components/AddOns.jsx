import React, { useState } from 'react';

const AddOns = () => {
  const [addOns, setAddOns] = useState([]); // Add-Ons-specific data
  const [showModal, setShowModal] = useState(false);
  const [newAddOn, setNewAddOn] = useState({ title: '', text: '', image: null });

  const addAddOn = () => {
    if (newAddOn.title && newAddOn.text && newAddOn.image) {
      setAddOns([...addOns, { id: addOns.length + 1, title: newAddOn.title, text: newAddOn.text, image: newAddOn.image }]);
      setNewAddOn({ title: '', text: '', image: null });
      setShowModal(false);
    }
  };

  return (
    <div>
      <h2>Add-Ons</h2>

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
        {addOns.map((addOn) => (
          <div className="col-md-4" key={addOn.id}>
            <div className="card">
              {addOn.image && <img src={addOn.image} alt="AddOn" className="card-img-top" />}
              <div className="card-body">
                <h5 className="card-title">{addOn.title}</h5>
                <p className="card-text">{addOn.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for adding new Add-On */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Add-On</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => { e.preventDefault(); addAddOn(); }}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="title" 
                      value={newAddOn.title}
                      onChange={(e) => setNewAddOn({ ...newAddOn, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="text" className="form-label">Text</label>
                    <textarea 
                      className="form-control" 
                      id="text" 
                      rows="3" 
                      value={newAddOn.text}
                      onChange={(e) => setNewAddOn({ ...newAddOn, text: e.target.value })}
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
                          reader.onloadend = () => setNewAddOn({ ...newAddOn, image: reader.result });
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </div>
                  {newAddOn.image && <img src={newAddOn.image} alt="Preview" className="img-fluid mb-2" />}
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

export default AddOns;
