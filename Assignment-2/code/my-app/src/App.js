import logo from './logo.svg';
import './App.css';



function App(props) {
  const { employee, title } = props;

  return (
    <div className='child'>
      <div className="image"><img src={employee.profileImg} alt="" srcset="" width="100px" /></div>
      <div className='heading'><h1>{employee.name}</h1></div>

      <div className='fnt'>
        <p >Location</p>
      </div>
      <div className="fntstle"><p>{employee.location}</p>
        <br></br></div>


      <div className="fnt"> <p>Blood group</p></div>
      <div className="fntstle"> <p>{employee.bloodGroup}</p>
        <br /></div>


      <div className="fnt"><p >Age</p></div>
      <div className="fntstle"><p >{employee.age}</p></div>





    </div>
  )
}



export default App;
