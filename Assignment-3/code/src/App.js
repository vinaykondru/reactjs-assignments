import React from 'react';
import logo from './logo.svg';
import './App.css';


const employee = {
  Name: 'Alan Ford',
  EmployeeId: '00005162',
  AppointmentElement: '9:00(24-05-2016)',
  Email: 'alan.ford@gmail.nl',
  Phone: '+31123456789',
  Status: 'In Progress',
  Door: 'Mark',
  Time: '10:30 (25-05-2016)',
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}
var arrow = "<"
function App() {
  return (
    <div className="site-container">
      <div className="box1">
        <div className="b1">
          <p>&#60;</p>
        </div>
        <div className="b2">
          <p><strong>{employee.Name}</strong></p>
          <p>{employee.EmployeeId}</p>
        </div>
        <div className="b3">
          <button>Print</button>
        </div>

      </div>
      <div className="customer-info">
        <p><strong>Appointment on:</strong> {employee.AppointmentElement}</p>
        <p>
          <strong>Email:</strong>{employee.Email}</p>
        <p><strong>Phone:</strong>{employee.Phone}</p>
      </div>

      <div className="order-info">
        <div className="a1">
          <p><strong>Status</strong></p>

          <li>{employee.Status}</li>
        </div>
        <div className="a2">
          <p><strong>Door</strong></p>
          <p>{employee.Door}</p>
        </div>
        <div className="a3">
          <p><strong>Time</strong></p>
          <p>{employee.Time}</p>
        </div>
      </div>
      <div className="product-list">
        <div className="c1">

        </div>
        <div className="c2">
          <img src='https://www.w3schools.com/howto/img_avatar.png' alt="" />
        </div>
        <div className="c3">
          <p><strong>Boltaart Bosbessen</strong></p>
          <p>Overheerlijke Boltaart met Bosbessen uit de keuken van de Bijenkof</p>
        </div>
        <div className="c4">
          <p>&#62;</p>
        </div>
      </div>

    </div>
  );
}

export default App;
