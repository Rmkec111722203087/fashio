// src/components/Placeholder.js
const Placeholder = () => {
    return (
      <div className="card" aria-hidden="true">
        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder image" />
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
        </div>
      </div>
    );
  };
  
  export default Placeholder;
  