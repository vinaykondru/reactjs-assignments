import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const employee = {
//   Name: 'Alan Ford',
//   EmployeeId: '00005162',
//   Appointment: '9:00(24-05-2016)',
//   Email: 'alan.form@Email.nl',
//   Phone: '+31123456789',
//   Status: 'In Progress',
//   Door: 'Mark',
//   Time: '10:30 (25-05-2016)',
//   profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
// }


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
