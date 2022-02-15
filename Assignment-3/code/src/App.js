// import React from 'react';
// import logo from './logo.svg';
// import './App.css';


// const employee = {
//   Name: 'Alan Ford',
//   EmployeeId: '00005162',
//   AppointmentElement: '9:00(24-05-2016)',
//   Email: 'alan.ford@gmail.nl',
//   Phone: '+31123456789',
//   Status: 'In Progress',
//   Door: 'Mark',
//   Time: '10:30 (25-05-2016)',
//   profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
// }
// var arrow = "<"
// function App() {
//   return (
//     <div className="site-container">
//       <div className="box1">
//         <div className="b1">
//           <p>&#60;</p>
//         </div>
//         <div className="b2">
//           <p><strong>{employee.Name}</strong></p>
//           <p>{employee.EmployeeId}</p>
//         </div>
//         <div className="b3">
//           <button>Print</button>
//         </div>

//       </div>
//       <div className="customer-info">
//         <p><strong>Appointment On</strong>{employee.AppointmentElement}</p>
//         <p>
//           <strong>Email:</strong>{employee.Email}</p>
//         <p><strong>Phone:</strong>{employee.Phone}</p>
//       </div>

//       <div className="order-info">
//         <div className="a1">
//           <p><strong>Status</strong></p>

//           <li>{employee.Status}</li>
//         </div>
//         <div className="a2">
//           <p><strong>Door</strong></p>
//           <p>{employee.Door}</p>
//         </div>
//         <div className="a3">
//           <p><strong>Time</strong></p>
//           <p>{employee.Time}</p>
//         </div>
//       </div>
//       <div className="product-list">
//         <div className="c1">

//         </div>
//         <div className="c2">
//           <img src='https://www.w3schools.com/howto/img_avatar.png' alt="" />
//         </div>
//         <div className="c3">
//           <p><strong>Boltaart Bosbessen</strong></p>
//           <p>Overheerlijke Boltaart met Bosbessen uit de keuken van de Bijenkof</p>
//         </div>
//         <div className="c4">
//           <p>&#62;</p>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
var arrow = "<"
var arrow_right = '>'
function App() {
  // const { Appointment } = props
  const Appointment = {
    name: 'Alan Ford',
    Number: '0000123099',
    AppointmentElement: '9:00(24-05-2016)',
    newTime: '11:00 ',
    newDate: '03/02/2022',
    Email: 'qwerty0987@gmail.in',
    phonenumber: '+91000054524',
    Door: 'Mark',
    PrevTime: '9:30',
    Status: 'In Progress',
    productImg: 'https://www.w3schools.com/howto/img_avatar.png',
    ProductName: 'The Buohuodf jodfvvs',
    ProductDescription: 'Vjoije Njpce Mnjdncoi jivfjifsj lofghdkfh fjvdjfhv uhufdvh uohdsfnes ,nuoh fvhufv.'
  }
  return (
    <div className="site-container">
      {/* Start Your code here */}
      <div className='top-info'>
        <a href="#"> {arrow} </a>
        <div className='name-id'>
          <strong>{Appointment.name}</strong>
          <label>{Appointment.Number}</label></div>
        <button> Print</button>
      </div>
      <div className='customer-info'>
        <p><strong>Appointment On:</strong> <label>{Appointment.AppointmentElement}</label></p>
        <p><strong>Email :</strong> <label>{Appointment.Email}</label></p>
        <p><strong>Phone:</strong> <label>{Appointment.phonenumber}</label></p>
      </div>
      <div className='order-info'>
        <div className='col'><h3>Status</h3>
          <ul>
            <h5><li>In Progress</li></h5>
          </ul>
        </div>
        <div className='col'>
          <h3>Door</h3>
          <h5>Mark</h5>
        </div>
        <div className='col'><h3>Time</h3>
          <h5>{Appointment.newTime}  ({Appointment.newDate})</h5>
        </div>
      </div>
      <div className='product-list'>
        <input type="checkbox"></input>
        <img className='picture' src={Appointment.productImg} width='100' height='100' />
        <div className='description'>
          <strong>{Appointment.ProductName} </strong><br></br>
          <label>{Appointment.ProductDescription}</label>
        </div>
        <a href='#'  >{arrow_right}</a>
      </div>
    </div>
  );
}
export default App;
