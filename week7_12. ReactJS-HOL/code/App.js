// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const flights = [
    { id: 1, flightNo: 'AI101', from: 'Delhi', to: 'Mumbai', time: '10:00 AM' },
    { id: 2, flightNo: 'AI202', from: 'Mumbai', to: 'Chennai', time: '12:30 PM' },
    { id: 3, flightNo: 'AI303', from: 'Bangalore', to: 'Delhi', time: '03:15 PM' }
  ];

  return (
    <div className="App">
      <h1>Flight Ticket Booking</h1>
      
      <button 
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        className={isLoggedIn ? 'logout-btn' : 'login-btn'}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      
      {isLoggedIn ? (
        <div className="user-view">
          <h2>Welcome User!</h2>
          <div className="booking-form">
            <h3>Book Your Flight</h3>
            <select>
              {flights.map(flight => (
                <option key={flight.id} value={flight.flightNo}>
                  {flight.flightNo}: {flight.from} to {flight.to} ({flight.time})
                </option>
              ))}
            </select>
            <input type="date" placeholder="Travel Date" />
            <input type="number" placeholder="Passengers" min="1" />
            <button className="book-btn">Book Now</button>
          </div>
        </div>
      ) : (
        <div className="guest-view">
          <h2>Available Flights</h2>
          <table>
            <thead>
              <tr>
                <th>Flight No</th>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {flights.map(flight => (
                <tr key={flight.id}>
                  <td>{flight.flightNo}</td>
                  <td>{flight.from}</td>
                  <td>{flight.to}</td>
                  <td>{flight.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Please login to book tickets</p>
        </div>
      )}
    </div>
  );
}

export default App;