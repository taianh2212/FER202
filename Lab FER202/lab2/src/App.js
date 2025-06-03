import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const menuItems = [
    { label: 'SALE', name: 'Margherita Pizza', oldPrice: '$40.00', newPrice: '$24.00', img: 'anh/anh1.jpg' },
    { label: '', name: 'Mushroom Pizza', price: '$25.00', img: 'anh/anh2.jpg' },
    { label: 'NEW', name: 'Hawaiian Pizza', price: '$30.00', img: 'anh/anh3.jpg' },
    { label: 'SALE', name: 'Pesto Pizza', oldPrice: '$50.00', newPrice: '$18.00', img: 'anh/anh4.jpg' },
  ];

  return (
    <div className="bg-dark text-white">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Pizza House</a>
         
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li ><a className="nav-link active" href="#">Home</a></li>
              <li ><a className="nav-link" href="#">About Us</a></li>
              <li ><a className="nav-link" href="#">Contact</a></li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-danger" type="submit">🔍</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="position-relative">
        <img
          src="anh/anh5.jpg"
          className="img-fluid w-100"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
          alt="Banner"
        />
        <div
          className="position-absolute top-50 start-50 translate-middle text-white text-center"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
        >
          <h1>Neapolitan Pizza</h1>
          <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
        </div>
      </div>

      {/* Menu Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Our Menu</h2>
        <div className="row g-4">
          {menuItems.map((item, idx) => (
            <div key={idx} className="col-md-3">
              <div className="card text-dark position-relative h-100">
                {item.label && (
                  <span className="badge bg-warning position-absolute m-2">{item.label}</span>
                )}
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body">x
                  <h5 className="card-title">{item.name}</h5>
                  {item.oldPrice ? (
                    <p><del>{item.oldPrice}</del> <span className="text-danger fw-bold">{item.newPrice}</span></p>
                  ) : (
                    <p>{item.price}</p>
                  )}
                  <button className="btn btn-dark w-100">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Section */}
      <div className="container pb-5">
        <h2 className="text-center mb-4">Book Your Table</h2>
        <form>
          <div className="row g-3 mb-3">
            <div className="col-md-3">
              <input type="text" className="form-control" placeholder="Your Name *" required />
            </div>
            <div className="col-md-3">
              <input type="email" className="form-control" placeholder="Your Email *" required />
            </div>
            <div className="col-md-3">
              <select className="form-select" required>
                <option value="">Select a Service</option>
                <option>Lunch</option>
                <option>Dinner</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Please write your comment" rows="4"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-warning text-white px-5">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
