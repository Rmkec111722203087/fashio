import React from 'react';

const Home = ({ cards }) => {
  return (
    <div className="container mt-5">
      <h1>Home</h1>
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

export default Home;
