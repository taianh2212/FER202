import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <h3 className="mb-4">Cards Columns</h3>

      <div className="row">
        {/* Card 1 - Blue background */}
        <div className="col-md-4 mb-4">
          <div className="card text-center" style={{ backgroundColor: '#2196f3', color: 'white' }}>
            <img src="OTO1.jpg" className="card-img-top p-3" alt="Car 1" />
            <div className="card-body">
              <p className="card-text">Some text inside the first card</p>
            </div>
          </div>
        </div>

        {/* Card 2 - Yellow background */}
        <div className="col-md-4 mb-4">
          <div className="card text-center" style={{ backgroundColor: '#fbc02d', color: 'black' }}>
            <img src="OTO1.jpg" className="card-img-top p-3" alt="Car 2" />
            <div className="card-body">
              <p className="card-text">Some text inside the first card</p>
            </div>
          </div>
        </div>

        {/* Card 3 - Red background */}
        <div className="col-md-4 mb-4">
          <div className="card text-center" style={{ backgroundColor: '#c62828', color: 'white' }}>
            <img src="OTO1.jpg" className="card-img-top p-3" alt="Car 3" />
            <div className="card-body">
              <p className="card-text">Some text inside the first card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
