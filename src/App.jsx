import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './App.css'

const App = () => {
  return (<div>
  <Navbar></Navbar>
  <div className="container">
  <div className="row add-task-container">
    <div className="col-8">
      <input type="text" placeholder='Add A Task'></input>
    </div>
    <div className="col-2">
     <p>Add</p>
    </div>
    <div className="col-2 text-center">
    <p>Clear All</p>
    </div>
  </div>
</div>
  </div>)
}

export default App