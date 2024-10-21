import React, { useState } from 'react';


const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([
    { id: 1, src: null, description: 'Image 1 description' },
    { id: 2, src: null, description: 'Image 2 description' },
    { id: 3, src: null, description: 'Image 3 description' },
    { id: 4, src: null, description: 'Image 4 description' },
    { id: 5, src: null, description: 'Image 5 description' },
    { id: 6, src: null, description: 'Image 6 description' },
    { id: 7, src: null, description: 'Image 7 description' },
    { id: 8, src: null, description: 'Image 8 description' },
  ]); // Initial empty placeholders with descriptions

  const [selectedImage, setSelectedImage] = useState(null); // For the image clicked
  const [showModal, setShowModal] = useState(false); // To control modal visibility

  // Function to handle search input (for later functionality)
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Implement search logic here if needed
  };

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null); // Clear the selected image when closing
  };

  return (
    <div className="container mt-4">
      {/* Search Bar */}
      <div className="row mb-4">
        <div className="col">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search..." 
            value={searchTerm} 
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Collage-like grid of images */}
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-3 mb-4" key={image.id}>
            <div className="card">
              {/* Placeholder for empty image or uploaded image */}
              <div
                style={{
                  height: '200px',
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
                onClick={() => handleImageClick(image)} // Open modal when clicked
              >
                {image.src ? (
                  <img src={image.src} alt="Collage Item" className="img-fluid" />
                ) : (
                  <span>Empty</span>  // Placeholder text for empty slots
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying selected image and its description */}
      {showModal && selectedImage && (
        <div className="modal show d-block" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Image Description</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                {/* Display the selected image */}
                {selectedImage.src ? (
                  <img src={selectedImage.src} alt="Selected" className="img-fluid mb-3" />
                ) : (
                  <div style={{ height: '200px', backgroundColor: '#f0f0f0' }}>
                    <span>No image available</span>
                  </div>
                )}

                {/* Display the image description */}
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
