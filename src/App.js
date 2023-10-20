// import logo from './logo.svg';
import './App.css';
// import Index from './component/Ticket/Index';
// import List from './component/ListChoosen/Index';
import StudentDetails from './details/student-details'
import StudentInfor from './form-infor/student-infor'

function App() {
  return (
    <div className="App">
      <div className='top'>
        <StudentDetails/>
      </div>
      <div className='bot'>
        <StudentInfor/>
      </div>
    </div>
  );
}

export default App;
