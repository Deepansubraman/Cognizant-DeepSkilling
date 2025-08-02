// App.js
import React from 'react';
import './App.css';

function App() {
  const offices = [
    { id: 1, name: "Downtown Office", rent: 55000, address: "123 Main St", image: "https://via.placeholder.com/300x200?text=Office+1" },
    { id: 2, name: "Tech Park Suite", rent: 75000, address: "456 Tech Ave", image: "https://via.placeholder.com/300x200?text=Office+2" },
    { id: 3, name: "Executive Plaza", rent: 65000, address: "789 Business Blvd", image: "https://via.placeholder.com/300x200?text=Office+3" },
    { id: 4, name: "Innovation Hub", rent: 45000, address: "321 Creative Lane", image: "https://via.placeholder.com/300x200?text=Office+4" }
  ];

  return (
    <div className="App">
      <h1>Office Space Rental</h1>
      <div className="office-list">
        {offices.map(office => (
          <div key={office.id} className="office-card">
            <img src={office.image} alt={office.name} />
            <h2>{office.name}</h2>
            <p>Address: {office.address}</p>
            <p style={{ color: office.rent < 60000 ? 'red' : 'green', fontWeight: 'bold' }}>
              Rent: ₹{office.rent.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;